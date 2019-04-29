// Import a library to help a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//Create a component JSX
const App = () => (
	<Header />
	);

//Render it to device
AppRegistry.registerComponent('albums', () => App);
