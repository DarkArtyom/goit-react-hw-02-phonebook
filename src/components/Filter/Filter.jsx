import { LabelSearch, InputSearch } from './Filter.styled.js';

export const Filter = ({ value, onChange }) => (
  <LabelSearch>
    Find contact by name
    <InputSearch
      type="text"
      name="search"
      placeholder="enter for search"
      value={value}
      onChange={onChange}
    />
  </LabelSearch>
);
