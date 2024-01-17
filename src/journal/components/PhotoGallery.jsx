export const PhotoGallery = () => {
  return (
    <div className="gallery grid grid-cols-4 gap-2 rounded-md ">
      <div className="relative overflow-hidden min-h-80 col-span-4 sm:col-span-1">
        <div
          className="bg-white  overflow-hidden rounded-md bg-cover bg-center bg-no-repeat hover:scale-110 duration-300 absolute inset-0 "
          style={{ backgroundImage: "url('/about.webp')" }}
        ></div>
      </div>
    </div>
  );
};
