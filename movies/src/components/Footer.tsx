import { FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="py-5 border-t-2 border-blue-600 bg-blue-500 text-white">
      <div className="main-container">
        <div className="flex justify-center items-center">
          <p>Movies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
