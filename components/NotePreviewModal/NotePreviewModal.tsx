
'use client';
import css from "./NotePreviewModal.module.css";


type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {


  return (
    <div className = {css.backdrop}>
      <div className = {css.modal}>
        {children}
        
      </div>
    </div>
  );
};

export default Modal;
