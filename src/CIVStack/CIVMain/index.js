import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CIVHome from './Home';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../colors';
import FAQScreen from './FAQScreen';
import Profile from './Profile';
import ContactUs from './ContactUs';
const Tab = createBottomTabNavigator();
const Context = React.createContext();
export default function CIVMain({route}) {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBarOptions={{
        labelStyle: {
          // color: colors.DO_GRAY,
          fontSize: 13,
        },
        activeTintColor: colors.TORY_BLUE,
        inactiveTintColor: colors.DO_GRAY,
      }}>
      <Tab.Screen
        name="Home"
        component={CIVHome}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({color}) => (
            <Icon name="home-outline" size={23} color={color} />
          ),
        }}
        initialParams={{currentUser: route.params.currentUser}}
      />
      <Tab.Screen
        name="Support"
        component={FAQScreen}
        options={{
          tabBarLabel: 'Hỏi đáp',
          tabBarIcon: ({color}) => (
            <Icon name="ios-chatbubble-outline" size={23} color={color} />
          ),
        }}
        initialParams={{currentUser: route.params.currentUser}}
      />
      <Tab.Screen
        name="ContactUs"
        component={ContactUs}
        options={{
          tabBarLabel: 'Phản ánh',
          tabBarIcon: ({color}) => (
            <Icon name="send-outline" size={23} color={color} />
          ),
        }}
        initialParams={{currentUser: route.params.currentUser}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Hồ sơ',
          tabBarIcon: () => <Icon name="person-outline" size={23} />,
        }}
        initialParams={{currentUser: route.params.currentUser}}
      />
    </Tab.Navigator>
  );
}
