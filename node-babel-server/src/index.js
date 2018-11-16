import 'dotenv/config';
import 'cross-fetch/polyfill';
import ApolloClient, { gql } from 'apollo-boost';

const GET_ORGANIZATION = gql`
  query($org: String!) {
    organization(login: $org) {
      name
      url
      repositories(first: 5) {
        edges {
          node {
            name
            url
          }
        }
      }
    }
  }
`;

const ADD_STAR = gql`
  mutation AddStar($repoId: ID!) {
    addStar(input: { starrableId: $repoId }) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });
  },
});

client
  .query({
    query: GET_ORGANIZATION,
    variables: { org: 'the-road-to-learn-react' },
  })
  .then(res => console.log(res));

client
  .mutate({
    mutation: ADD_STAR,
    variables: { repoId: 'MDEwOlJlcG9zaXRvcnk2MzM1MjkwNw==' },
  })
  .then(res => console.log(res));

const userCredentials = { firstname: 'emmanuel' };
const userDetails = { nationality: 'nigerian' };

const user = {
  ...userCredentials,
  ...userDetails,
};
