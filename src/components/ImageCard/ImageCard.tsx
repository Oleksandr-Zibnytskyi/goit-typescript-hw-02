import css from "./ImageCard.module.css";
import { Images } from "../types";

interface ImageCardProps {
  image: Images;
  onClick: (alt_description: string, urls: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  const handleClick = () => {
    onClick(image.alt_description, image.urls.regular); 
  };

  return (
    <div className={css.container} onClick={handleClick}>
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard