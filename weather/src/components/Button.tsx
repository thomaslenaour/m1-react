import { FC, MouseEvent } from 'react';

interface ButtonProps {
  type: 'button' | 'submit';
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  label: string;
  classes?: string;
}

const Button: FC<ButtonProps> = ({ type, onClick, label, classes }) => {
  return (
    <button type={type} onClick={onClick} className={classes}>
      {label}
    </button>
  );
};

export default Button;
