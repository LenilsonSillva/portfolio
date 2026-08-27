# Lenilson Silva — Portfólio

> Full Stack & Mobile Developer · Portugal 🇵🇹
>
> **🌐 Online: [https://portfolio-rouge-three-50.vercel.app](https://portfolio-rouge-three-50.vercel.app)**

Portfólio pessoal profissional construído com **Next.js (App Router)**, **TypeScript**, **Tailwind CSS** e **Framer Motion** — uma página única, animada, com introdução em ecrãs, transições suaves entre seções e suporte **bilingue (EN / PT)**.

## ✨ Destaques

- 🎬 **Intro em ecrãs** — sequência de arranque (terminal → nome → reveal) com barra de progresso, contadora 00–100 e *skip* por clique;
- 🌗 **Tema escuro elegante** — tipografia display (Space Grotesk), acentos em gradiente violeta/ciano, grid subtil, ruído (noise) e glow;
- ✨ **Animações por toda a parte** — reveals no scroll, marquee de tecnologias, tabs com transição (case study do PlayHome), timeline animada, glow que segue o cursor, botões magnéticos e barra de progresso de scroll;
- 🌐 **i18n EN / PT-BR / PT-PT** — deteção automática do idioma do sistema (pt-BR → pt-BR, pt-PT → pt-PT, resto → inglês) + alternância manual no menu, persistida em `localStorage` (o mesmo conceito aplicado no PlayHome);
- 📱 **Totalmente responsivo** — do mobile ao desktop, com menu em *overlay* animado;
- ♿ **Acessibilidade** — respeita `prefers-reduced-motion`, navegação por âncoras e HTML semântico;
- ⚡ **Next.js App Router** — pronto para deploy na Vercel.

## 🧱 Stack

| Camada     | Tecnologias                                        |
| ---------- | -------------------------------------------------- |
| Framework  | Next.js 15 (App Router)                            |
| Linguagem  | TypeScript                                         |
| Estilos    | Tailwind CSS v4                                    |
| Animações  | Framer Motion 13                                   |
| Fontes     | Space Grotesk · Inter · JetBrains Mono (next/font) |

## 🚀 Como correr

```bash
npm install
npm run dev
# http://localhost:3000
```

Build de produção:

```bash
npm run build
npm start
```

## 📁 Estrutura

```
src/
├── app/                  # App Router (layout, página, estilos globais, ícone)
├── components/
│   ├── Shell.tsx         # Composição da página + estado da intro
│   ├── Intro.tsx         # Ecrãs de entrada (boot → nome → reveal)
│   ├── Nav.tsx           # Navegação fixa + menu mobile + toggle EN/PT
│   ├── CursorGlow.tsx    # Glow que segue o cursor
│   ├── providers/        # Contexto de idioma (EN/PT)
│   ├── sections/         # Hero, About, Stack, PlayHome, Projects,
│   │                     # Experience, Education, Journey, Beyond, Looking, Contact, Footer
│   └── ui/               # SectionHeader, Reveal, Marquee, Magnetic, Icons
└── lib/
    ├── data.ts           # Links e repositórios
    ├── motion.ts         # Variantes de animação partilhadas
    └── i18n/             # Traduções (en.ts, pt.ts)
```

## 📄 Secções

1. **Hero** — apresentação, disponibilidade e estatísticas
2. **About** — história + forma de trabalhar
3. **Tech Stack** — tecnologias por categoria
4. **PlayHome** — projeto principal em destaque (*case study* com tabs: visão geral, realtime, jogos, i18n, monetização, publicação)
5. **Other Projects** — UMESPPB, Filie, Denúncias e mais
6. **Experience** — Independent Developer + Indutel
7. **Education** — UFRN + curso avançado em andamento
8. **Journey** — timeline Brasil → Portugal
9. **Beyond Code** — música, games, automóveis
10. **What I'm looking for** — posições de interesse
11. **Contact** — email, WhatsApp e redes sociais

## 🌐 Deploy

Pronto para a [Vercel](https://vercel.com):

```bash
npm i -g vercel
vercel
```

## 🔗 Links

- [Portfólio (Vercel)](https://portfolio-rouge-three-50.vercel.app)
- [PlayHome — Google Play](https://play.google.com/store/apps/details?id=com.usuper.playhome)
- [PlayHome — Website](https://play-home-iota.vercel.app/)
- [PlayHome — Website (código)](https://github.com/LenilsonSillva/PlayHome-Website)
- [PlayHome — Backend (código)](https://github.com/LenilsonSillva/PlayHome-backend)
- [GitHub](https://github.com/LenilsonSillva) · [LinkedIn](https://www.linkedin.com/in/lenilson-sillva/)

---

Feito com ☕ em Porto, Portugal.
