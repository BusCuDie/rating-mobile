import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import CIVHomeScreen from './CIVHomeScreen';
import CIVMain from './CIVMain';
import DetailNew from './CIVMain/DetailNew'
const Stack = createStackNavigator();
export default function CIVStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="CIVMain" component={CIVMain} />
      <Stack.Screen name="DetailNew" component={DetailNew} />
    </Stack.Navigator>
  );
}
