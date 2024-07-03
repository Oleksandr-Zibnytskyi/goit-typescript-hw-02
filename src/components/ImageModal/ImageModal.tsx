import Modal from 'react-modal'
import css from './ImageModal.module.css'

Modal.setAppElement('#root');

interface ImageInfo {
  url: string;
  alt: string;
}

interface ImageModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  imageInfo: ImageInfo;
}

const ImageModal: React.FC<ImageModalProps> = ({ isModalOpen, closeModal, imageInfo }) => {
  return (
    <Modal 
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel='Modal window with larger image'
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}
      overlayClassName={css.modalOverlay}
      className={css.modalContent}
      bodyOpenClassName={css.modalOpen}
    >
      <img src={imageInfo.url} alt={imageInfo.alt} className={css.modalImg} />   
    </Modal>
  );
}

export default ImageModal;