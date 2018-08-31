import React from 'react';
import { createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import TweetScreen from '../screens/TweetScreen';

export default createStackNavigator(
  {
    Main: {
      screen: MainTabNavigator,
      navigationOptions: {
        header: null,
      }
    },
    Tweet: TweetScreen,
  },
);