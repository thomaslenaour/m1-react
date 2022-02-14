import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../routes/Routes';

interface ButtonProps {
  label: string;
  href?: AppRoutes;
  onClick?: () => void;
  classes?: string;
}

const Button: FC<ButtonProps> = ({ label, href, onClick, classes }) => {
  if (href) {
    return (
      <Link to={href} className={classes}>
        {label}
      </Link>
    );
  }

  return (
    <button role="button" onClick={onClick} className={classes}>
      {label}
    </button>
  );
};

export default Button;
