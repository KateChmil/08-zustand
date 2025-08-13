
'use client';
import css from "./NotesPage.module.css";
import { useState } from "react";
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { fetchNotes } from "@/lib/api";
import { useDebouncedCallback } from 'use-debounce';
import type { Note } from "@/types/note";


/*components*/
import SearchBox from "@/components/SearchBox/SearchBox";
import Pagination from "@/components/Pagination/Pagination"
import NoteList from "@/components/NoteList/NoteList";
import NoteForm from "@/components/NoteForm/NoteForm";
import Modal from "@/components/Modal/Modal";
import Loader from "@/components/Loader/Loader";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";

type NotesClientProps = {
  firstData: {
    notes: Note[];
    totalPages: number;
  }
  tag: string;
}


export default function NotesClient({firstData, tag}: NotesClientProps) {
	const [search, setSearch] = useState('');
	const [page, setPage] = useState(1);
	const [modalIsOpen, setModalIsOpen] = useState(false)

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['notes', search, page, tag],
	  queryFn: () => fetchNotes({ search, page, perPage: 12, tag }),
    placeholderData: keepPreviousData,
    initialData: firstData,
  
  });


const handleSearch = useDebouncedCallback((search: string) => {
    setSearch(search);
	setPage(1);
	
      
}, 500);
  





    return (<div className={css.app}>
	<header className={css.toolbar}>
			<SearchBox onSearch = {handleSearch} />
		{data && data.totalPages > 1 && (
          <Pagination
            selectedPage={page}
            totalPages={data.totalPages}
            onPageChange={setPage}
          />
        )}
		 <button className={css.button} type='button' onClick={() => setModalIsOpen(true)}>Create +</button>
		</header>
		

		
         {isLoading &&  <Loader/>}
       {isError &&  <ErrorMessage/>}

		 {isSuccess && data?.notes?.length > 0 && (
        <NoteList notes={data.notes} />)
      }
      
      {isSuccess && data?.notes?.length === 0 && (
  <p>No notes found</p>
)}
		

		{modalIsOpen && (
        <Modal onClose={() => setModalIsOpen(false)}>
          <NoteForm onClose={()=> {setModalIsOpen(false)} } />
        </Modal>
      )}
        
</div>
)
}