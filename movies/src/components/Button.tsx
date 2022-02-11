import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../routes/Routes';

interface ButtonProps {
  label: string;
  href?: AppRoutes;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ label, href, onClick }) => {
  if (href) {
    return (
      <Link to={href} className="text-red-500">
        {label}
      </Link>
    );
  }

  return (
    <button role="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
