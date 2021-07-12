import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './navigations/root-switch';
import AppRouter from './AppRouter';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <AppRouter />
      </NavigationContainer>
    );
  }
}
