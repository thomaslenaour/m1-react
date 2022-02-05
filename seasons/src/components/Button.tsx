import { FC } from 'react';

interface ButtonProps {
  label: string;
  type: 'button' | 'submit';
  onClick: () => void;
  classNames?: string;
}

const Button: FC<ButtonProps> = ({ classNames, label, type, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex justify-center py-3 px-5 rounded-md font-bold ${classNames}`}
    >
      {label}
    </button>
  );
};

export default Button;
