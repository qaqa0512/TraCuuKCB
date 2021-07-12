import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {homeTabs} from '../config/navigator';
import {Image, View, Text} from 'react-native';
import Resources from '../constants/Images';
import MainStack from './main_stacks';
//Components
import DrawerContent from '../components/DrawerContent';
// Screens
import HomeScreen from '../pages/HomeScreen';
import MarkedScreen from '../pages/MarkedScreen';
import NotificationScreen from '../pages/NotificationScreen';
import UserScreen from '../pages/UserScreen';
import NewsScreen from '../pages/NewsScreen';
import DeclareScreen from '../pages/DeclareScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName={homeTabs.home}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: '#139FEC',
          height: 59,
          paddingHorizontal: 5,
        },
      }}>
      <Tab.Screen
        name={homeTabs.marked}
        component={MarkedScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={
                  focused
                    ? Resources.common.iconDanhDau1
                    : Resources.common.iconDanhDau2
                }
                style={{width: 25, height: 25}}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: focused ? '#fff' : '#74C4FF',
                  fontSize: 12,
                  marginTop: 3,
                }}>
                Đã đánh dấu
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={homeTabs.news}
        component={NewsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={
                  focused
                    ? Resources.common.iconTinTuc1
                    : Resources.common.iconTinTuc2
                }
                style={{width: 25, height: 25}}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: focused ? '#fff' : '#74C4FF',
                  fontSize: 12,
                  marginTop: 3,
                }}>
                Tin tức
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={homeTabs.home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={
                  focused
                    ? Resources.common.iconTracu1
                    : Resources.common.iconTracu2
                }
                style={{
                  width: 60,
                  height: 40,
                  position: 'absolute',
                  bottom: 16.5,
                  // paddingBottom: 50,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: focused ? '#fff' : '#74C4FF',
                  fontSize: 12,
                  paddingTop: 27.5,
                }}>
                Tra cứu
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={homeTabs.user}
        component={UserScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={
                  focused
                    ? Resources.common.iconCaNhan2
                    : Resources.common.iconCaNhan1
                }
                style={{width: 25, height: 25}}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: focused ? '#fff' : '#74C4FF',
                  fontSize: 12,
                  marginTop: 3,
                }}>
                Cá nhân
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={homeTabs.noti}
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={
                  focused
                    ? Resources.common.iconThongBao1
                    : Resources.common.iconThongBao2
                }
                style={{width: 25, height: 25}}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: focused ? '#fff' : '#74C4FF',
                  fontSize: 12,
                  marginTop: 3,
                }}>
                Thông báo
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// export default function RootStack() {
//   return (
//     <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
//       <Drawer.Screen name="MenuTab" component={TabNavigator} />
//     </Drawer.Navigator>
//   );
// }
