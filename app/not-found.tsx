import css from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notehub",
  description: "This note was not found",
  openGraph: {
      title: "NoteHub",
      description: "This note was not found",
      url: "https://08-zustand-pied.vercel.app/" ,
      siteName: 'NoteHub',
      images: [
        {
          url: 'https://ac.goit.global/fullstack/react/og-meta.jpg',
          width: 1200,
          height: 630,
          alt: "notehub",
        },
      ],
      type: 'article',
    },
};






const NotFound = () => {
    return (<div>
    <h1 className={css.title}>404 - Page not found</h1>
<p className={css.description}>Sorry, the page you are looking for does not exist.</p>
   </div> )
}
 
export default NotFound;
