import React, { useState } from 'react';
import Table from './table';
import useStations from "../api/useStations.hook";
import FilterContainer from "../filter";
import SearchContainer from "../search";
import useDebounce from "../tools/useDebounce.hook";

const TableContainer = () => {
  const [type, setType] = useState('all');
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(1000, query);
  const { error, loading, data } = useStations(debouncedQuery, type);

  // if (!data.stations) return 'Loading...'; // Cannot use `loading` because of a bug in @apollo/react-hooks
  // apparently fixed in https://github.com/apollographql/react-apollo/pull/3313
  if (error) return 'Error: ' + JSON.stringify(error);
  return (
   <>
     <FilterContainer onChange={setType} />
     <SearchContainer onChange={setQuery}/>
     <br />
     <Table data={data.stations} loading={loading}/>
   </>
  );
};

export default TableContainer;