import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import Idea from './MainStack/Idea';
import CIVStack from './CIVStack';
const Stack = createStackNavigator();
export default function HomeScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false,}}>
        {/* <Stack.Screen name="Begin"  component={BeginScreen} />
        <Stack.Screen name="GuestPageScreen" component={GuestPageScreen} /> */}
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="MainStack" component={MainStack} />
        <Stack.Screen name="CIVStack" component={CIVStack} />
        <Stack.Screen name="Idea" component={Idea}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
