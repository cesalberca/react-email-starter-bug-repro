# React Email Reproduction

This is a minimal reproduction for the `SyntaxError: The requested module 'node:path' does not provide an export named 'default'` error.

## Steps to Reproduce

1. Install dependencies: `npm install`
2. Run the dev server: `npm run dev`
3. Open the preview at `http://localhost:3000` (or the port shown)
4. Select `repro`


```text
npm run dev

> react-email-starter@1.1.0 dev
> email dev

 ⚠ Port 3000 is already in use, trying 3001
    React Email 5.2.5
    Running preview at:          http://localhost:3001

  ✔ Ready in 0.1s

  ✖ Failed while rendering repro.tsx
SyntaxError: The requested module 'node:path' does not provide an export named 'default'
    at SourceTextModule.link (node:internal/vm/module:209:17)
    at process.processTicksAndRejections (node:internal/process/task_queues:104:5)
    at async nv (/Users/cesalberca/tmp/react-email-starter/node_modules/@react-email/preview-server/.next/server/chunks/ssr/[root-of-the-server]__c98892d5._.js:1849:8002)
    at async w1 (/Users/cesalberca/tmp/react-email-starter/node_modules/@react-email/preview-server/.next/server/chunks/ssr/[root-of-the-server]__c98892d5._.js:1876:1052)
    at async xa (/Users/cesalberca/tmp/react-email-starter/node_modules/@react-email/preview-server/.next/server/chunks/ssr/[root-of-the-server]__c98892d5._.js:1877:728)
    at async t (/Users/cesalberca/tmp/react-email-starter/node_modules/@react-email/preview-server/.next/server/chunks/ssr/_c489cf42._.js:6:236)
 ⨯ Error: Only plain objects, and a few built-ins, can be passed to Client Components from Server Components. Classes or null prototypes are not supported.
  {name: "Error", message: ..., stack: ..., cause: Error}
                                                   ^^^^^
    at stringify (<anonymous>) {
  digest: '2619529205'
}
```
