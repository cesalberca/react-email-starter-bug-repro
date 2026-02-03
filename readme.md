# React Email Reproduction

This is a minimal reproduction for the `SyntaxError: The requested module 'node:path' does not provide an export named 'default'` error.

## Steps to Reproduce

1. Navigate to this directory: `cd react-email-starter`
2. Install dependencies: `npm install`
3. Run the dev server: `npm run dev`
4. Open the preview at `http://localhost:3000` (or the port shown)
5. Select `repro.tsx`

The error should appear because `src/mdx-loader.tsx` uses a default import for `node:path`.
