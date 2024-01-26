import { PhotoGallery } from '../components/PhotoGallery';

export const NoteView = () => {
  return (
    <section className="animate__animated animate__fadeIn animate__faster">
      <header className="flex justify-between">
        <h2 className="text-lg">January 15, 2023</h2>
        <div>
          <button className="uppercase">Save</button>
        </div>
      </header>
      <section className="mt-5">
        <input
          className="w-full md:w-1/2 text-4xl py-2 mb-4 bg-transparent border border-[#BDBBB844] custom-input"
          type="text"
          placeholder="Type a title"
        />
        <textarea
          className="w-full text-lg  mb-4 mt-2 bg-transparent border border-[#BDBBB844] resize-none custom-input"
          cols="30"
          rows="5"
          placeholder="What happened today?"
        ></textarea>
        <PhotoGallery />
      </section>
    </section>
  );
};
