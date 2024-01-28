import { useDispatch, useSelector } from 'react-redux';
import { PhotoGallery } from '../components/PhotoGallery';
import { useForm } from '../../hooks/useForm';
import { startDeleteNote, startSaveNote } from '../../store/journal/thunks';
import { useRef } from 'react';

export const NoteView = () => {
  const dispatch = useDispatch();
  const uploadInput = useRef();

  const { active: activeNote } = useSelector((state) => state.journal);
  const { date, photosURL } = activeNote;
  const { title, description, onInputChange } = useForm(activeNote);

  const dateFormatted = new Date(date).toDateString();

  const onSaveNote = () => {
    dispatch(startSaveNote({ ...activeNote, title, description, photosURL }));
  };

  const onDeleteNote = () => {
    dispatch(startDeleteNote());
  };

  const onUploadFiles = ({ target }) => {
    console.log(target.files);
  };

  return (
    <section className="animate__animated animate__fadeIn animate__faster">
      <header className="flex justify-between items-center">
        <h2 className="text-lg">{dateFormatted}</h2>
        <div className="flex gap-4">
          <input type="file" multiple ref={uploadInput} className="hidden" onChange={onUploadFiles} />
          <button
            className="uppercase hover:bg-[#333] rounded-md md:p-2"
            onClick={() => uploadInput.current.click()}
          >
            <i className="bx bx-upload md:mr-1"></i>
            <span className="hidden md:inline">Upload</span>
          </button>
          <button className="uppercase hover:bg-[#333] rounded-md md:p-2" onClick={onDeleteNote}>
            <i className="bx bx-trash md:mr-1"></i>
            <span className="hidden md:inline">Delete</span>
          </button>
          <button className="uppercase  hover:bg-[#333] rounded-md md:p-2" onClick={onSaveNote}>
            <i className="bx bx-save md:mr-1"></i>
            <span className="hidden md:inline">Save</span>
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
