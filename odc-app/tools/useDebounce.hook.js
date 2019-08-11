import React, { useState, useEffect } from 'react';

const useDebounce = (delay, inputValue) => {
  const [value, setValue] = useState(value);
  useEffect(
   () => {
     const handler = setTimeout(() => {
       setValue(inputValue);
     }, delay);
     return () => { // Cleanup on input change
       clearTimeout(handler);
     };
   },
   [inputValue] // Execute on every input change
  );

  return value;
};

export default useDebounce;