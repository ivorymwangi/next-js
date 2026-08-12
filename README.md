# Ivory's Portfolio (Next.js)

A personal portfolio site built with Next.js, showcasing projects built
while learning web development.

## Running it locally

1. Install dependencies:
   ```
   npm install
   ```
2. Start the dev server:
   ```
   npm run dev
   ```
3. Open http://localhost:3000 in your browser. Next.js will reload the
   page automatically whenever you save a file.

## Project structure

```
pages/        one file = one route (file-based routing)
  _app.js     wraps every page — the only place global CSS is imported
  index.js    the homepage ("/")
  about.js    the /about page
  projects.js the /projects page
  contact.js  the /contact page
components/   pieces reused across pages: Navbar, Footer, ProjectCard
styles/       globals.css (palette + font + resets) plus one
              *.module.css file per page/component
public/       static files — put images here to reference as "/name.jpg"
```

Next.js turns every file inside `pages/` into a route automatically —
that's what "file-based routing" means. You don't register routes
anywhere; the file's name and location on disk *is* the route.

## Things to customise

- **Your photo**: the homepage currently uses a placeholder image from
  placehold.co. Drop your real photo into `public/` (e.g.
  `public/profile.jpg`), then in `pages/index.js` change the `src` on
  the `<Image>` to `"/profile.jpg"`.
- **Project screenshots**: same idea — add real screenshots to
  `public/`, and update the `image` field for each project in
  `pages/projects.js`.
- **Project links**: replace the `liveUrl` and `repoUrl` placeholder
  `'#'` values in `pages/projects.js` with your real deployed links
  and GitHub repo URLs.
- **Bio**: update the paragraph in `pages/about.js`.
- **Contact details**: update the array at the top of
  `pages/contact.js` with your real email and LinkedIn.
- Once you're only using local images, you can remove the `images`
  block from `next.config.js` — it's only there to allow placehold.co.

## Deploying

Next.js apps deploy easily to [Vercel](https://vercel.com) (made by the
same team behind Next.js) — push this project to a GitHub repo, then
import it on Vercel with default settings.
