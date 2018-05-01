import React, { Component } from 'react';
//import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
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
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
