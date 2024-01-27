import { PropTypes } from 'prop-types';

export const Note = ({ title, description, date }) => {
  return (
    <article className="p-3 h-28 rounded-md mt-1 mx-2 hover:bg-[#333] cursor-pointer">
      <div className="flex w-full items-center">
        <div className="note-item">
          <h3 className="font-semibold text-sm text-ellipsis overflow-hidden whitespace-nowrap">{title}</h3>
          <p className="text-sm font-thin text-ellipsis overflow-hidden whitespace-nowrap">{description}</p>
        </div>
        <img className="w-16 h-16 object-scale-down" src="/about.webp" alt="image-post" />
      </div>
      <span className="block text-xs text-gray-400">{`${new Date(date).toLocaleTimeString()}`}</span>
    </article>
  );
};

Note.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.number,
};
