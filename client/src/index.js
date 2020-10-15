import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './components/App';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import { createHttpLink } from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory'
import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'


import * as serviceWorker from './serviceWorker';

const link = createHttpLink({
  uri: 'http://localhost:3000/graphql'
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache() 
});

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
