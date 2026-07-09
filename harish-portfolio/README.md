# Harish Krishnan — Portfolio

Next.js 14 + TypeScript + Tailwind CSS portfolio site ("Basecamp" design).

## Before you deploy — two things to fix

1. **LinkedIn link**: open `components/Contact.tsx` and replace the `href: "#"`
   next to `LinkedIn` with your actual profile URL.
2. **Resume**: `public/resume.pdf` is currently your bank-focused resume
   (`Harish_Krishnan_bank_resume.pdf`). Swap in a general/software-focused
   version if you have one — just replace the file, same filename.
3. **FP&A live link**: once you deploy the dashboard to Streamlit Community
   Cloud (see main chat for steps), open `components/Projects.tsx` and update
   the FP&A project's `linkHref` to the live `share.streamlit.io` URL.

## Running locally (optional)

You don't need to do this to deploy — Vercel builds it for you. But if you
want to preview changes on your own machine first:

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploying to Vercel

1. Create a new empty repository on GitHub (e.g. `harish-portfolio`).
2. Upload this entire folder's contents to that repo — either drag-and-drop
   via GitHub's web UI ("Add file" → "Upload files"), or via git:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/HarishKrishnaan/harish-portfolio.git
   git push -u origin main
   ```
3. Go to https://vercel.com, sign in with GitHub, click "Add New… → Project".
4. Select the repo. Vercel auto-detects Next.js — leave settings as default.
5. Click Deploy. In about a minute you'll get a live URL like
   `harish-portfolio.vercel.app`.
6. (Optional) Add a custom domain under Project → Settings → Domains.

Any time you push a new commit to `main`, Vercel redeploys automatically.

## Adding more projects later

Open `components/Projects.tsx` and add another object to the `projects`
array — same shape as the existing two. No layout code needs to change.

## Adding a blog section later

Not included yet, since you mentioned you don't have posts ready. When you
do, the cleanest approach is a new `Pitch` section (see `components/Pitch.tsx`
for the wrapper used by About/Skills/Projects) plus either static MDX files
or a simple array of `{ title, date, excerpt, href }` objects, same pattern
as `Projects.tsx`.
