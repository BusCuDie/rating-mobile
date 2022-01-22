import React from 'react';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import {createStackNavigator} from '@react-navigation/stack';
import DetailRatingScreen from './DetailRatingScreen';
import RatingYourSeftScreen from './RatingYourSeftScreen';
import RankScreen from './RankScreen';
import EditProfile from './EditProfile';
import RatingScreen from './RatingScreen';
import DetailRatingYsScreen from './DetailRatingYsScreen';
import FAQScreen from './FAQScreen';
import ConservationScreen from './ConservationScreen';
import DetailConservationScreen from './DetailConservationScreen';
const Stack = createStackNavigator();
export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="DetailRating" component={DetailRatingScreen} />
      <Stack.Screen name="RatingYourSeft" component={RatingYourSeftScreen} />
      <Stack.Screen name="Rank" component={RankScreen} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Rating" component={RatingScreen} />
      <Stack.Screen name="DetailRatingYs" component={DetailRatingYsScreen} />
      <Stack.Screen name="FAQCAD" component={FAQScreen} />
      <Stack.Screen name="ConservationScreen" component={ConservationScreen} />
      <Stack.Screen name="DetailConservationScreen" component={DetailConservationScreen}/>
    </Stack.Navigator>
  );
}
