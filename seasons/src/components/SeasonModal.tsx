import { FC } from 'react';
import { createPortal } from 'react-dom';

import Button from './Button';
import SeasonCard, { SeasonCardProps } from './SeasonCard';

interface ModalProps {
  closeModal: () => void;
  seasonCardData: SeasonCardProps;
}

const SeasonModal: FC<ModalProps> = ({ closeModal, seasonCardData }) => {
  return createPortal(
    <>
      <div className="absolute top-0 w-screen h-screen z-10 bg-black bg-opacity-50"></div>
      <div className="absolute top-0 z-20 flex flex-col items-center justify-center h-screen w-full">
        <SeasonCard {...seasonCardData} />
        <div className="mt-10">
          <Button
            type="button"
            onClick={closeModal}
            label="Close modal"
            classNames="bg-red-400 hover:bg-red-500 text-white"
          />
        </div>
      </div>
    </>,
    document.getElementById('modal') as HTMLElement,
  );
};

export default SeasonModal;
