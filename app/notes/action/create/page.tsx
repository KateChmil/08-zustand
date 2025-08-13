
import NoteForm from "@/components/NoteForm/NoteForm";
import css from "./CreateNote.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Note",
  description: "Create notes here!",
  openGraph: {
      title: "Create Note",
      description: "Create notes here!",
      url: "https://07-routing-nextjs-cyan-eight.vercel.app/" ,
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


const CreateNote = async () => {
	
  return(<main className={css.main}>
  <div className={css.container}>
    <h1 className={css.title}>Create note</h1>
	  <NoteForm/>
  </div>
</main>
)
};

export default CreateNote;