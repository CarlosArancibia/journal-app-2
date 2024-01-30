import { useDispatch, useSelector } from 'react-redux';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView } from '../views/NoteView';
import { NothingSelectedView } from '../views/NothingSelectedView';
import { setActiveNote } from '../../store/journal/journalSlice';

export const JournalPage = () => {
  const { active } = useSelector((state) => state.journal);
  const dispatch = useDispatch();

  const onSetActiveNote = () => {
    dispatch(
      setActiveNote({
        title: '',
        description: '',
        date: new Date().getTime(),
        photosURL: [],
      })
    );
  };

  return (
    <JournalLayout>
      {active ? <NoteView /> : <NothingSelectedView />}
      <button
        className="absolute bottom-16 right-8 md:right-16 bg-white text-black w-14 h-14 rounded-full text-4xl"
        onClick={onSetActiveNote}
      >
        +
      </button>
    </JournalLayout>
  );
};
