This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# Auth

Auth goes as follows. 
1. User clicks google login
2. This calls the Auth provider function "login()". 
3. login() calls the BFF /api/auth/login route
   1. This route handles the call to our actual API
4. API redirects user to /login/loginresponse
5. Login response reads the queries for the user's data
6. Auth provider function "refreshUser()" is called to set the context variable "user" to the user specified.
   1. The user's data is held in sessionStorage
   2. This user can then be accessed anywhere using the "user" variable of the auth context.
   3. Auth context is handled via a client component which wraps as a provider children components.

# Structure
This uses a BFF (Backend for frontend). For all client components, api calls are made through Next Route handlers. When fetching data/updating data with a server component or action, those are called directly 