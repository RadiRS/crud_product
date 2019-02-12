import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// Screens
import ProductList from './src/screens/ProductList';
import ProductDetail from './src/screens/ProductDetail';
import ProductAdd from './src/screens/ProductAdd';
import ProductUpdate from './src/screens/ProductUpdate';

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  ProductList,
  ProductDetail,
  ProductAdd,
  ProductUpdate
});

const AppContainer = createAppContainer(AppNavigator);
