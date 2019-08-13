import ReactDOM from 'react-dom';
import React from 'react';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from '@apollo/react-hooks';
import TableContainer from "./table";
import * as ServiceEndpoints from './service_endpoints.json';

const client = new ApolloClient({
  uri: ServiceEndpoints.local_graphql,
});

const App = () => {
  return (
   <ApolloProvider client={client}>
     <TableContainer />
   </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));