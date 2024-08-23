import {
  ApolloClient as ApolloClientClass,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";

const httpLink = createHttpLink({
  uri: "https://spacex-production.up.railway.app/",
});

const cache = new InMemoryCache();

export const ApolloClient = new ApolloClientClass({
  link: httpLink,
  cache,
});
