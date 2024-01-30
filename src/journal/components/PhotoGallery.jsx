import { PropTypes } from 'prop-types';
import { PhotoGalleryItem } from './PhotoGalleryItem';

export const PhotoGallery = ({ photos }) => {
  return (
    <div className="gallery grid grid-cols-4 gap-2 rounded-md ">
      {photos.map((photoURL) => (
        <PhotoGalleryItem key={photoURL} photoUrl={photoURL} />
      ))}
    </div>
  );
};

PhotoGallery.propTypes = {
  photos: PropTypes.array,
};
