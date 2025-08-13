'use client'
import css from "./NoteForm.module.css";
import { createNote } from "../../lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { NoteTag } from "../../types/note";

import type { Note } from "../../types/note";
import { useState } from "react";
import { useRouter } from 'next/navigation';



interface NoteFormValues {
  title: string;
  content: string;
  tag: NoteTag;
}



export default function NoteForm() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const handleCancel = () => router.push('/notes/filter/all');



  const mutation = useMutation<Note, Error, NoteFormValues>({
    mutationFn: createNote,
    onSuccess: () => {
      router.push('/notes/filter/all');
      queryClient.invalidateQueries({ queryKey: ['notes'] });
      ;
    }
  });
  
 
 


  const handleSubmit = (formData: FormData) => {
     const values: NoteFormValues = {
    title: formData.get("title") as string,
    content: formData.get("content") as string,
    tag: formData.get("tag") as NoteTag,
  };
    mutation.mutate(values);
    ;
  }

    return (
      
      <form className={css.form} action={handleSubmit}>
        <div className={css.formGroup}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            className={css.input}
         
          />
        
        </div>

        <div className={css.formGroup}>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            rows={6}
            className={css.textarea}
        
          />
        
        </div>

        <div className={css.formGroup}>
          <label htmlFor="tag">Tag</label>
          <select
            id="tag"
            name="tag"
            className={css.select}
        
          >
            <option value="Todo">Todo</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Meeting">Meeting</option>
            <option value="Shopping">Shopping</option>
          </select>
       
        </div>

        <div className={css.actions}>
          <button
            type="button"
            className={css.cancelButton}
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={css.submitButton}
          >
            Create note
          </button>
        </div>
      </form>

    );
  }