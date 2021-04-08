import React from 'react';
import {Vied} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import MapLocation from '../Screens/MapLocation';
const Stack = createStackNavigator();

export default function Routes ({param}) {
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='MapLocation' component={MapLocation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}