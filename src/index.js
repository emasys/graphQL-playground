import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ExchangeRates from './Exchangerates';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql'
});

client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then((result) => console.log(result));
ReactDOM.render(
  <ApolloProvider client={client}>
    <ExchangeRates />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
