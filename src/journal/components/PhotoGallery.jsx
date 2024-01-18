import { PhotoGalleryItem } from './PhotoGalleryItem';

export const PhotoGallery = () => {
  return (
    <div className="gallery grid grid-cols-4 gap-2 rounded-md ">
      <PhotoGalleryItem photoUrl={'/about.webp'} />
    </div>
  );
};
