import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { Images } from '../types';

interface ImageGalleryProps {
  items: Images[];
  openModal: (alt_description: string, urls: string) => void;
}
const ImageGallery: React.FC<ImageGalleryProps> = ({ items, openModal }) => {
  return (
    <ul className={css.galleryList}>
      {items.map((item) => (
        <li key={item.id} className={css.galleryItem}>
          <ImageCard
            image={item}
            onClick={() => openModal(item.alt_description, item.urls.regular)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
