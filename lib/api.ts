import axios from "axios";
import type { Note, NoteTag } from "../types/note";

const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;


export interface FetchNotesParams {
    search?: string;
    page?: number;
    perPage?: number;
    tag?: string;
}



export interface FetchNotesResponse {
    page: number;
    perPage: number
    notes: Note[];
    totalPages: number;
    
}

export const fetchNotes = async ({ search, page = 1, perPage=12, tag}:FetchNotesParams): Promise<FetchNotesResponse> => {
 const config = {
        params: {
            page,
            perPage,
         ...(search && { search }), 
        ...(tag && tag !== "All" ? { tag } : {})
    },
        headers: {
            Authorization: `Bearer ${myKey}`
        },
    }
    const response = await axios.get<FetchNotesResponse>(
        'https://notehub-public.goit.study/api/notes',
         config
    );

   

    return {
        page,
        perPage,
        notes: response.data.notes,
        totalPages: response.data.totalPages,
        
     };
        
}

export const createNote = async (note: {
    title: string;
    content: string;
    tag: NoteTag;
}): Promise<Note> => {
 const config = {
        headers: {
            Authorization: `Bearer ${myKey}`
        },
    }



    const response = await axios.post<Note>(
        'https://notehub-public.goit.study/api/notes',
        note,
         config
    );

    return response.data;
};


export const deleteNote = async (id: string): Promise<Note> => {
 const config = {
        headers: {
            Authorization: `Bearer ${myKey}`
        },
    }



    const response = await axios.delete<Note>(
        `https://notehub-public.goit.study/api/notes/${id}`,
         config
    );

    return response.data;
};


export const fetchNoteById = async (id: string): Promise<Note> => {
     const config = {
        headers: {
            Authorization: `Bearer ${myKey}`
        },
    }
  const response = await axios.get<Note>(
        `https://notehub-public.goit.study/api/notes/${id}`,
         config
    )
    return response.data;
}