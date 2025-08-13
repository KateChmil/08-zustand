import Link from 'next/link';
import css from "./Sidebar.module.css";

const tags = ["All", "Todo", "Work", "Personal", "Shopping", "Meeting"];
const NotesSidebar = () => {
  

  return (
    <>
       <Link  className={css.menuCreate} href="/notes/action/create" >Create note</Link>
    <ul className={css.menuList}>
       {tags.map((tag) => (
              <li className={css.menuItem} key={tag} >
                  <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
                {tag}
              </Link>
              </li>
         ))}
      </ul>
      </>
  );
};

export default NotesSidebar;


