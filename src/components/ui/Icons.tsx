import type { ReactNode } from "react";

export type IconName =
  | "github"
  | "linkedin"
  | "instagram"
  | "facebook"
  | "mail"
  | "phone"
  | "external"
  | "arrowUp"
  | "arrowUpRight"
  | "play";

const paths: Record<IconName, ReactNode> = {
  github: (
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  ),
  linkedin: (
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  ),
  instagram: (
    <>
      <rect
        x="2.8"
        y="2.8"
        width="18.4"
        height="18.4"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="4.3" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.2" cy="6.8" r="1.25" />
    </>
  ),
  facebook: (
    <path d="M13.4 21v-6.9h2.32l.44-2.9H13.4V9.28c0-.84.31-1.41 1.47-1.41h1.54V5.27c-.27-.04-1.18-.12-2.24-.12-2.21 0-3.73 1.35-3.73 3.81v2.24H8.16v2.9h2.3V21h2.94Z" />
  ),
  mail: (
    <>
      <rect
        x="2.8"
        y="5"
        width="18.4"
        height="14"
        rx="2.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="m3.8 7.4 8.2 5.8 8.2-5.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  phone: (
    <path d="M6.62 3.2h2.87l1.4 4.2-1.96 1.5a12.6 12.6 0 0 0 6.17 6.16l1.5-1.96 4.2 1.4v2.87c0 1.21-.99 2.2-2.2 2.13C11.3 18.94 5.06 12.7 4.49 5.4c-.07-1.21.92-2.2 2.13-2.2Z" />
  ),
  external: (
    <path d="M14 4.5h5.5V10h-1.9V6.66l-8.06 8.06-1.34-1.34L16.26 5.3H14V4.5ZM5.5 6.5H13v1.9H7.4v10.2H16.2V14h1.9v6.5H5.5V6.5Z" />
  ),
  arrowUp: <path d="M12 4.5 5.5 11h4.25v8.5h4.5V11h4.25L12 4.5Z" />,
  arrowUpRight: (
    <>
      <path
        d="M7 17 17 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M9.5 7H17v7.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  play: (
    <path d="M8 5.14v13.72c0 .8.87 1.3 1.56.88l10.8-6.86a1.04 1.04 0 0 0 0-1.76L9.56 4.26A1.04 1.04 0 0 0 8 5.14Z" />
  ),
};

export function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
