import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {rootSwitch} from '../config/navigator';
import MainStack from './main_stacks';

const Stack = createStackNavigator();
function RootStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={rootSwitch.main}
        component={MainStack}
        options={{
          animationEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
