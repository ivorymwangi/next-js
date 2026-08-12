// This file wraps every page in the app. It's the one place where
// we're allowed to import global CSS in Next.js — importing
// globals.css inside an individual page file would throw an error.
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  // Component is whichever page matches the current URL (Home,
  // About, Projects, or Contact). pageProps is any data that page
  // was given. We just render it — same idea as {children} in
  // a layout component.
  return <Component {...pageProps} />;
}
