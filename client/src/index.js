import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { useQuery, gql } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import {Layout} from "./components";
import TrackCard from "./containers/track-card";


const client = new ApolloClient({
    // options go here
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),

});

ReactDOM.render(
    <ApolloProvider client={client}>
        <React.StrictMode>
            <GlobalStyles/>
            <Pages/>
        </React.StrictMode>
    </ApolloProvider>,
    document.getElementById('root')
);
