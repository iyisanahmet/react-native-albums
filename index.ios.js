// IMPORT THE LIBRARIES
import React from 'react';
import { Text, View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//CREATE COMPONENT
const App = () => {
    return (
        <View>
            <Header headerText={'Albums'} />
            <AlbumList />
        </View>
    );
};

//RENDER IT TO THE DEVICE
AppRegistry.registerComponent('deneme', () => App);
