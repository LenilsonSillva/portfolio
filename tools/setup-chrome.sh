#!/bin/bash
# Rebuilds the headless Chrome test environment (puppeteer + system libs)
# after a sandbox restart. Usage: bash tools/setup-chrome.sh
set -e
cd "$(dirname "$0")/.."
mkdir -p /tmp/pwtest /tmp/debs /tmp/chromelibs

# 1. puppeteer (downloads Chrome to ~/.cache/puppeteer)
if [ ! -d /tmp/pwtest/node_modules/puppeteer ]; then
  cd /tmp/pwtest
  npm init -y >/dev/null 2>&1 || true
  npm i puppeteer --no-fund --no-audit >/dev/null 2>&1
  cd - >/dev/null
fi

# 2. system shared libraries (extracted .debs, no root needed)
L=/tmp/chromelibs/usr/lib/x86_64-linux-gnu
if ! LD_LIBRARY_PATH=$L ldd /home/user/.cache/puppeteer/chrome/linux-*/chrome-linux64/chrome 2>/dev/null | grep -q "not found"; then
  echo "chrome libs already OK"; exit 0
fi

cd /tmp/debs
[ -f Packages ] || curl -s http://deb.debian.org/debian/dists/trixie/main/binary-amd64/Packages.gz -o Packages.gz
[ -f Packages ] || zcat Packages.gz > Packages

# direct apt downloads (in local apt index)
for p in libnspr4 libnss3 libxdamage1; do
  [ -f "${p}"*.deb ] || apt-get download "$p" 2>/dev/null || true
done

# exact pool paths from the trixie index (t64 renames)
for p in libatk1.0-0t64 libatk-bridge2.0-0t64 libatspi2.0-0t64 libcups2t64 libasound2t64 libxkbcommon0 libavahi-common3 libavahi-client3; do
  fn=$(awk -v pkg="$p" 'index($0,"Package: "pkg)==1 {f=1} f && /^Filename: / {print $2; f=0}' Packages | tail -1)
  base=$(basename "$fn")
  [ -f "$base" ] || curl -sO "http://deb.debian.org/debian/$fn"
done

for d in /tmp/debs/*.deb; do dpkg-deb -x "$d" /tmp/chromelibs; done

# 3. verify
missing=$(LD_LIBRARY_PATH=$L ldd /home/user/.cache/puppeteer/chrome/linux-*/chrome-linux64/chrome 2>/dev/null | grep -c "not found" || true)
echo "missing libs: $missing"
[ "$missing" = "0" ] || exit 1
echo "chrome environment ready"
