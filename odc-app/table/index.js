import React from 'react';
import Table from './table';
import useStations from "../api/useStations.hook";

const TableContainer = () => {
  const stations = useStations();
  return (
   <Table />
  );
};

export default TableContainer;