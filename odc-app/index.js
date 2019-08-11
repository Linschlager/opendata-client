import ReactDOM from 'react-dom';
import React from 'react';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from '@apollo/react-hooks';
import TableContainer from "./table";

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
});

const App = () => {
  return (
   <ApolloProvider client={client}>
     <TableContainer />
   </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));