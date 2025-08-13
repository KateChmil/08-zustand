import NotesClient from "./Notes.client";
import { fetchNotes } from "@/lib/api";


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