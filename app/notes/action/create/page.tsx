
import NoteForm from "@/components/NoteForm/NoteForm";
import css from "./CreateNote.module.css"


const CreateNote = async () => {
	
  return(<main className={css.main}>
  <div className={css.container}>
    <h1 className={css.title}>Create note</h1>
	  <NoteForm></NoteForm>
  </div>
</main>
)
};

export default CreateNote;