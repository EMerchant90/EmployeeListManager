import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
//import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyB1LOvymYEYVXr9ug5ebfEuxEkiR17MhTs',
      authDomain: 'manager-daaea.firebaseapp.com',
      databaseURL: 'https://manager-daaea.firebaseio.com',
      projectId: 'manager-daaea',
      storageBucket: 'manager-daaea.appspot.com',
      messagingSenderId: '767919109832'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
