import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {homeDrawer} from '../config/navigator';
import {Image, View, Text} from 'react-native';
import Resources from '../constants/Images';
import MainStack from './main_stacks';
//Components
import DrawerContent from '../components/DrawerContent';
import HomeTabs from './home_tab';
import HomeScreen from '../pages/HomeScreen';
// Screens

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function HomeDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName={homeDrawer.home_tab}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name={homeDrawer.home_tab} component={HomeTabs} />
    </Drawer.Navigator>
  );
}
