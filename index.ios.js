// IMPORT THE LIBRARIES
import React from 'react';
import { Text, View, AppRegistry } from 'react-native';
import Header from './src/components/header';

//CREATE COMPONENT
const App = () => {
    return (
        <View>
            <Header headerText={'Albums'} />
        </View>
    );
};

//RENDER IT TO THE DEVICE
AppRegistry.registerComponent('deneme', () => App);
