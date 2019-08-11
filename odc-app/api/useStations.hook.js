import React from 'react';
import gql from 'graphql-tag';
import {useQuery} from "@apollo/react-hooks";

const GET_STATIONS = (name = "", type = "all") => gql`
    query {
        stations(query: "${name}", type: ${type}) {
            id
            name
            score
            coordinate {
                type
                x
                y
            }
            distance
            icon
        }
    }
`;

const useStations = (name, type) => useQuery(GET_STATIONS(name, type));
export default useStations;