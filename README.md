# 2021-splash-page

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Notes

The `@firebase/testing` dev dependency is set to an older version due to a bug with the current ones.
Please see https://github.com/firebase/firebase-js-sdk/issues/3096 and https://stackoverflow.com/a/61934298 for more details.

## Testing

To run the Firestore security rules unit tests, first, start the emulator with the Firebase CLI:

```bash
firebase emulators:start --only firestore
```

Execute unit tests with:

```bash
npm run test
```
