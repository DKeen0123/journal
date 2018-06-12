import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { HttpLink, ApolloClient } from 'apollo-boost';
import { InMemoryCache } from 'apollo-boost';

import Navigator from './Navigator';

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.graph.cool/simple/v1/cji75xsaq6z4o0167if2nvbfo"
  }),
  cache: new InMemoryCache()
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Navigator />
      </ApolloProvider>
    );
  }
}



