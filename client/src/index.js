import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Tour from './components/auth/index'
import reportWebVitals from './reportWebVitals';

import { ApolloProvider, Query } from 'react-apollo'
import ApolloClient, {gql} from 'apollo-boost'

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


// Apollo Client for django graphql backend
const client = new ApolloClient({
  uri: "http://localhost:8000/graphql/",
  // When we make a fetch we will send credentials
  fetchOptions: {
    credentials: "include"
  },
  // operation allow as to access the header
  request: operation => {
    const token = localStorage.getItem("authToken") || "";
    operation.setContext({
      headers: {
        Authorization: `JWT ${token}`
      }
    });
  },
  clientState: {
    defaults: {
      isLoggedIn: !!localStorage.getItem("authToken")
    }
  }
});

const Is_logged_in_query = gql`
  query {
    isLoggedIn @client
  }
`

// Material UI Custom theme
const theme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      default: '#000E2B'
    }
  }
});


ReactDOM.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    <CssBaseline />
    <ApolloProvider client={client}>
      <Query query={Is_logged_in_query}>
        {({data}) => data.isLoggedIn ? <App /> : <Tour />}
      </Query>
    </ApolloProvider>
    {/* </ThemeProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
