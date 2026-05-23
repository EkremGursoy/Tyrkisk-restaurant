# Memili — Turkish Restaurant Website

A modern, responsive restaurant website for **Memili**, an authentic Turkish restaurant in Oslo.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

| Route     | Description                          |
| --------- | ------------------------------------ |
| `/`       | Home — hero, featured dishes, reviews |
| `/about`  | Story, mission, values               |
| `/menu`   | Full menu by category                |
| `/contact`| Form, info, map placeholder          |

## Project Structure

```
src/
├── app/              # App Router pages & layouts
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── home/         # Home page sections
│   ├── about/        # About page sections
│   ├── menu/         # Menu components
│   ├── contact/      # Contact components
│   └── ui/           # Reusable UI components
└── lib/              # Data, types, utilities
```

## Build

```bash
npm run build
npm start
```

## Deploy to GitHub

See **[DEPLOY.md](./DEPLOY.md)** for full instructions.

Quick start:

```powershell
.\scripts\deploy.ps1
```

Live site (after Pages is enabled): `https://<your-username>.github.io/memili/`
