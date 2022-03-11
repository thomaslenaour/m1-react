import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-blue-200 shadow-sm">
      <div className="main-container py-5">
        <p className="text-xs text-center">
          <a
            href="https://thomaslenaour.com"
            target="_blank"
            className="underline"
            rel="noreferrer"
          >
            thomaslenaour.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
