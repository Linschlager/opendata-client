import React, { useState } from 'react';
import Search from "./search";

const SearchContainer = ({ onChange }) => {
  const [value, setValue] = useState('');
  const onChangeWrapper = event => {
    setValue(event.target.value);
    if (onChange) onChange(event.target.value);
  };
  return (
   <Search value={value} onChange={onChangeWrapper}/>
  );
};

export default SearchContainer;