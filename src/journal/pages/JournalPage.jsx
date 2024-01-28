import { useDispatch, useSelector } from 'react-redux';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView } from '../views/NoteView';
import { NothingSelectedView } from '../views/NothingSelectedView';
import { startAddEmptyNote } from '../../store/journal/thunks';

export const JournalPage = () => {
  const { active } = useSelector((state) => state.journal);
  const dispatch = useDispatch();

  const onAddEmptyNote = () => {
    dispatch(startAddEmptyNote());
  };

  return (
    <JournalLayout>
      {active ? <NoteView /> : <NothingSelectedView />}
      <button
        className="absolute bottom-10 right-16 bg-white text-black w-14 h-14 rounded-full text-4xl"
        onClick={onAddEmptyNote}
      >
        +
      </button>
    </JournalLayout>
  );
};
