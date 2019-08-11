import React from 'react';
import Filter from "./filter";

const options = ['all', 'station', 'poi', 'address'];
const FilterContainer = ({ onChange }) => {
  const onChangeWrapper = event => {
    if (onChange) onChange(event.target.value);
  };

  return (
   <Filter options={options} onChange={onChangeWrapper}/>
  );
};

export default FilterContainer;