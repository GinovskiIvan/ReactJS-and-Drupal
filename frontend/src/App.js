import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from "@apollo/client";
import {onError} from "@apollo/client/link/error";
import GetReleaseNotes from './Components/GetReleaseNotes';

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ 
    uri: "https://carlos-prd.localdev.iqual.ch/graphql"
  }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache,
  link: link
});

function App() {
  return <ApolloProvider client={client}>{" "}<GetReleaseNotes></GetReleaseNotes></ApolloProvider>
}

export default App;
