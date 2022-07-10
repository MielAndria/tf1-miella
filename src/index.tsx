import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import {clientConnection} from './services/apollo/apollo-utils';

ReactDOM.render(
  <ApolloProvider client={clientConnection}>
    <App />,
  </ApolloProvider>,
document.getElementById('root')
)
