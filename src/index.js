import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DogsContainer from './DogsContainer';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'https://nx9zvp49q7.lp.gql.zone/graphql'
});
ReactDOM.render(
  <ApolloProvider client={client}>
    <DogsContainer />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
