export const Note = () => {
  return (
    <article className="p-3 h-28 rounded-md mt-1 mx-2 hover:bg-[#333]">
      <div className="flex w-full items-center">
        <div className="note-item">
          <h3 className="font-semibold text-sm text-ellipsis overflow-hidden whitespace-nowrap">Title</h3>
          <p className="text-sm font-thin text-ellipsis overflow-hidden whitespace-nowrap">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod nulla laudantium veritatis magni
            consectetur. Qui consectetur iure.
          </p>
        </div>
        <img className="w-16 h-16 object-scale-down" src="/about.webp" alt="image-post" />
      </div>
      <span className="block text-xs text-gray-400">10:59</span>
    </article>
  );
};
