import { ChangeEvent, FC } from 'react';

export interface SearchBarProps {
  value: string | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className="border-2 px-3 py-2 rounded-md w-full"
      placeholder="Search a movie"
      value={value || ''}
      onChange={onChange}
    />
  );
};

export default SearchBar;
