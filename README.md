## RecipeAI

AI-based web application that generates specific recipes based on calories count or ingredients
![homePage](https://github.com/prodananca16/RecipeAI/assets/75379555/71d7a4fb-c55a-41c6-8f32-555cc4e031f2)


## Live demo

[See live demo](https://recipe-ai-dusky.vercel.app/).

## Table of contents

- [Technologies and libraries used](#technologies-and-libraries-used)
- [Getting Started](#getting-started)

## Technologies and libraries used

- NodeJS
- NextJS 14
- MongoDB Cloud
- OpenAI
- TailwindCSS
- shadcn/ui

## Getting Started

For using MongoDB Cloud and OpenAI add the following keys to `.env` file :

```bash
NODE_ENV = development
NEXT_ATLAS_URI = MONGODB_CONNECTION_STRING
NEXT_ATLAS_DATABASE = MONGODB_DATABASE_NAME
OPENAI_API_KEY=OPENAI_API_KEY
```

First, run the development server::

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
