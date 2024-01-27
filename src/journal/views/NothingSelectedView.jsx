import { useDispatch } from 'react-redux';
import { startAddEmptyNote } from '../../store/journal/thunks';

export const NothingSelectedView = () => {
  const dispatch = useDispatch();

  const onAddEmptyNote = () => {
    dispatch(startAddEmptyNote());
  };

  return (
    <article className="h-full flex animate__animated animate__fadeIn animate__faster">
      <h4 className="m-auto text-2xl text-center">Select or create an entry</h4>
      <button
        className="absolute bottom-10 right-16 bg-white text-black w-14 h-14 rounded-full text-4xl"
        onClick={onAddEmptyNote}
      >
        +
      </button>
    </article>
  );
};
