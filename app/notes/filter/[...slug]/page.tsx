import NotesClient from "./Notes.client";
import { fetchNotes } from "@/lib/api";
import { Metadata } from "next";


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tag = slug[0] === 'all' ? undefined : slug[0];
  return {
    title: `Notes: ${tag}`,
    description: `All ${tag} notes`,
    openGraph: {
      title: `Note: ${tag}`,
      description: `All ${tag} notes`,
      url: `https://08-zustand-pied.vercel.app/notes/filter/${tag}`,
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
  }
}


type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function Notes({params}: Props) {
  const { slug } = await params;
  const tag = slug[0] === 'all' ? undefined : slug[0];

  const firstData = await fetchNotes({search: "", page:1, perPage: 12, tag});

  return (
    <NotesClient
      firstData={firstData}
       tag={tag || "All"}
    />
  );
}