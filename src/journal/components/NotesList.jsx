import { useSelector } from 'react-redux';
import { Note } from './Note';

export const NotesList = () => {
  const { notes } = useSelector((state) => state.journal);

  return (
    <section className="overflow-hidden overflow-y-scroll notes h-[86vh]">
      {notes.map((note) => (
        <Note key={note.id} {...note} />
      ))}
    </section>
  );
};
