import React, { Component } from 'react';
import axiosGitHubGraphQL from '../config/axiosConfig';
import Organization from './Organization';

const GET_ORGANIZATION = `
  {
    organization(login: "the-road-to-learn-react") {
      name
      url
    }
  }
`;

const GET_REPOSITORY_OF_ORGANIZATION = `
  {
    organization(login: "the-road-to-learn-react") {
      name
      url
      repository(name: "the-road-to-learn-react") {
        name
        url
      }
    }
  }
`;

const GET_ISSUES_OF_REPOSITORY = `
  {
    organization(login: "the-road-to-learn-react") {
      name
      url
      repository(name: "the-road-to-learn-react") {
        name
        url
        issues(last: 5) {
          edges {
            node {
              id
              title
              url
            }
          }
        }
      }
    }
  }
`;

class App extends Component {
  state = {
    path: 'the-road-to-learn-react/the-road-to-learn-react',
    organization: null,
    error: null
  };

  componentDidMount() {
    this.onFetchFromGitHub(GET_ISSUES_OF_REPOSITORY);
  }

  onFetchFromGitHub = (query) => {
    axiosGitHubGraphQL.post('', { query }).then((result) =>
      this.setState({
        organization: result.data.data.organization,
        error: result.data.errors
      })
    );
  };

  onChange = (event) => {
    this.setState({ path: event.target.value });
  };

  onSubmit = (event) => {
    // fetch data

    event.preventDefault();
  };

  render() {
    const { path, organization, error } = this.state;
    return (
      <div>
        <h1>GraphQl stuff</h1>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="url">Show open issues for https://github.com/</label>
          <input
            id="url"
            type="text"
            value={path}
            onChange={this.onChange}
            style={{ width: '300px' }}
          />
          <button type="submit">Search</button>
        </form>
        <hr />
        {organization && (
          <Organization organization={organization} errors={error} />
        )}
      </div>
    );
  }
}

export default App;
