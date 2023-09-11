This is a [Next.js](https://nextjs.org/) project inspired from [Antony](https://www.youtube.com/watch?v=ffJ38dBzrlY&t=1359s) bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

ToDo's:

-   install next.js.

```bash
npx create-next-app@latest my-app --typescript --tailwind --eslint
```

-   Now install shadcn (Accessible component's library).

```bash
npx shadcn-ui@latest init
```

-   You will be asked to answer those questions

1. Would you like to use TypeScript (recommended)? no / yes
2. Which style would you like to use? › Default
3. Which color would you like to use as base color? › Slate
4. Where is your global CSS file? › › app/globals.css
5. Do you want to use CSS variables for colors? › no / yes
6. Where is your tailwind.config.js located? › tailwind.config.js
7. Configure the import alias for components: › @/components
8. Configure the import alias for utils: › @/lib/utils
9. Are you using React Server Components? › no / yes

-   Add [clerk](https://clerk.com/) for authentication

```bash
npm install @clerk/nextjs
```

-   Set environment keys by creating a `.env` file in the project root directory.

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_YWxsb3dlZC1waG9lbml4LTM5LmNsZXJrLmFjY291bnRzLmRldiQ
CLERK_SECRET_KEY=sk_test_FhXjEL7paLLpCSH2JUw6szIvfBhYAH1tZet106iV9n
```

## App's structure

```bash
.
├── app
│ ├── layout.tsx
│ └── page.tsx
├── components
│ ├── ui
│ │ ├── alert-dialog.tsx
│ │ ├── button.tsx
│ │ ├── dropdown-menu.tsx
│ │ └── ...
│ ├── main-nav.tsx
│ ├── page-header.tsx
│ └── ...
├── lib
│ └── utils.ts
├── styles
│ └── globals.css
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
