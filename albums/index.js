// Import a library to help a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';
//Create a component JSX
const App = () => (
		<Text>Some Text</Text>
	);

//Render it to device
AppRegistry.registerComponent('albums', () => App);
