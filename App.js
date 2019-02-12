import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// Screens
import ProductDetail from './src/screens/ProductDetail';
import ProductList from './src/screens/ProductList';
import ProductAdd from './src/screens/ProductAdd';

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  ProductList,
  ProductDetail,
  ProductAdd
});

const AppContainer = createAppContainer(AppNavigator);
