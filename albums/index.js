// Import a library to help a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
//Create a component JSX
const App = () => {
	return (
	<View>
		<Header headerText={'Albums! '} />
		<AlbumList />
		</View>
	);
};
//Render it to device
AppRegistry.registerComponent('albums', () => App);
