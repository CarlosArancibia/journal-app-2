import { useDispatch, useSelector } from 'react-redux';
import { PhotoGallery } from '../components/PhotoGallery';
import { useForm } from '../../hooks/useForm';
import { startSaveNote } from '../../store/journal/thunks';

export const NoteView = () => {
  const dispatch = useDispatch();
  const { active: activeNote } = useSelector((state) => state.journal);
  const { date, photosURL } = activeNote;
  const { title, description, onInputChange } = useForm(activeNote);

  const dateFormatted = new Date(date).toDateString();

  const onSaveNote = () => {
    dispatch(startSaveNote({ ...activeNote, title, description, photosURL }));
  };

  return (
    <section className="animate__animated animate__fadeIn animate__faster">
      <header className="flex justify-between">
        <h2 className="text-lg">{dateFormatted}</h2>
        <div>
          <button className="uppercase" onClick={onSaveNote}>
            Save
          </button>
        </div>
      </header>
      <section className="mt-5">
        <input
          className="w-full md:w-1/2 text-4xl py-2 mb-4 bg-transparent border border-[#BDBBB844] custom-input"
          type="text"
          placeholder="Type a title"
          name="title"
          value={title}
          onChange={onInputChange}
        />
        <textarea
          className="w-full text-lg  mb-4 mt-2 bg-transparent border border-[#BDBBB844] resize-none custom-input"
          cols="30"
          rows="5"
          placeholder="What happened today?"
          name="description"
          value={description}
          onChange={onInputChange}
        ></textarea>
        <PhotoGallery />
      </section>
    </section>
  );
};
