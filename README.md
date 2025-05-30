# Soraitech Website

This is the official website for Soraitech.

## Email Contact Form Setup

The contact form on this website sends emails to your specified email address. To configure this:

1. Create a `.env.local` file in the root directory with the following content:
   ```
   EMAIL_USER=your-gmail-address@gmail.com
   EMAIL_PASS=your-app-password
   ```

2. For the `EMAIL_PASS`, you'll need to use an App Password if using Gmail:
   - Go to your Google Account settings (https://myaccount.google.com)
   - Enable 2-Step Verification if not already enabled
   - Go to "Security" > "App passwords"
   - Generate a new app password for "Mail" and "Other (Custom name)" - name it "Soraitech Website"
   - Copy the generated password to your `.env.local` file

3. Restart the development server after making these changes

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
# soraitech
