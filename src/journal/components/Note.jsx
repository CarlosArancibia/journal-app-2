import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal/journalSlice';

export const Note = ({ title, description, date, id, photosURL }) => {
  const dispatch = useDispatch();

  const onSelectNote = () => {
    dispatch(
      setActiveNote({
        title,
        description,
        id,
        date,
        photosURL,
      })
    );
  };

  return (
    <article className="p-3  rounded-md mt-1 mx-2 hover:bg-[#333] cursor-pointer" onClick={onSelectNote}>
      <div className="flex w-full items-center">
        <div className="note-item min-h-12">
          <h3 className="font-semibold text-sm text-ellipsis overflow-hidden whitespace-nowrap">{title}</h3>
          <p className="text-sm font-thin text-ellipsis overflow-hidden whitespace-nowrap">{description}</p>
        </div>
        {photosURL.length > 0 && (
          <img className="max-w-14 rounded-md h-14 object-scale-down" src={photosURL[0]} alt="image-post" />
        )}
      </div>
      <span className="block text-xs  text-gray-400">{`${new Date(date).toLocaleTimeString()}`}</span>
    </article>
  );
};

Note.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.number,
  id: PropTypes.string,
  photosURL: PropTypes.array,
};
