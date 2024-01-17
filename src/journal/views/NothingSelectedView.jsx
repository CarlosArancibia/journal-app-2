export const NothingSelectedView = () => {
  return (
    <article className="h-screen flex">
      <h4 className="m-auto text-2xl">Select or create an entry</h4>
      <button className="absolute bottom-10 right-16 bg-white text-black w-14 h-14 rounded-full text-4xl">
        +
      </button>
    </article>
  );
};
