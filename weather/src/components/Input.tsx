import { ChangeEvent, FC } from 'react';

interface InputProps {
  type: 'text';
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  classes?: string;
  value?: string;
  placeholder?: string;
}

const Input: FC<InputProps> = ({
  type,
  value,
  placeholder,
  onChange,
  classes,
}) => {
  return (
    <input
      type={type}
      value={value || ''}
      placeholder={placeholder || ''}
      onChange={onChange}
      className={classes}
    />
  );
};

export default Input;
