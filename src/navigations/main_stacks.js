import React from 'react';
import {mainStack} from '../config/navigator';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import HomeTabs from '../navigations/home_tab';
import HomeDrawer from '../navigations/home_drawer';
import HomeScreen from '../pages/HomeScreen';
import DeclareScreen from '../pages/DeclareScreen';
import MarkedScreen from '../pages/MarkedScreen';
import InfoScreen from '../pages/InfoScreen';
import NewsScreen from '../pages/NewsScreen';
import UserScreen from '../pages/UserScreen';
import DetailNewsScreen from '../pages/DetailNewsScreen';

const Stack = createStackNavigator();
function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName={mainStack.home_drawer}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={mainStack.home_drawer} component={HomeDrawer} />

      {/* Common Navigation */}
      <Stack.Screen name={mainStack.home} component={HomeScreen} />
      <Stack.Screen name={mainStack.declare} component={DeclareScreen} />
      <Stack.Screen name={mainStack.marked} component={MarkedScreen} />
      <Stack.Screen name={mainStack.information} component={InfoScreen} />
      <Stack.Screen name={mainStack.news} component={NewsScreen} />
      <Stack.Screen name={mainStack.users} component={UserScreen} />
      <Stack.Screen name={mainStack.detailNews} component={DetailNewsScreen} />
    </Stack.Navigator>
  );
}

export default MainStack;
