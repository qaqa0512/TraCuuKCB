import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {mainStack} from '../config/navigator';
import NavigationService from '../navigations/main_stacks';
import {DrawerStyle} from '../assets/styles';
import Resources from '../constants/Images';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/AntDesign';

export default class DrawerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: [
        {
          id: 1,
          text: 'Lịch sử khai báo y tế',
          image: Resources.common.iconHistory,
          router: mainStack.declare,
        },
        {
          id: 2,
          text: 'Cơ sở y tế đã đánh dấu',
          image: Resources.common.iconMarked,
          router: mainStack.marked,
        },
        {
          id: 3,
          text: 'Đổi ngôn ngữ',
          image: Resources.common.iconLan,
        },
        {
          id: 4,
          text: 'Thông tin ứng dụng',
          image: Resources.common.iconInfo,
          router: mainStack.information,
        },
        {
          id: 5,
          text: 'Đăng nhập',
          image: Resources.common.iconSignin,
        },
      ],
    };
  }

  render() {
    return (
      // Top Header
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={DrawerStyle.viewTopContainer}
          activeOpacity={0.8}
          onPress={() => {
            this.props.navigation.navigate(mainStack.users);
          }}>
          <ImageBackground
            source={Resources.common.bgDrawer}
            resizeMode="cover"
            style={{width: '100%', height: '100%', justifyContent: 'center'}}>
            <Image
              source={Resources.common.avatar1}
              style={{
                width: 60,
                height: 60,
                marginBottom: 15,
                marginTop: 20,
                marginLeft: 10,
              }}
            />
            <View style={DrawerStyle.viewProfile}>
              <Text style={{fontSize: 17, color: '#fff'}}>
                Thông tin của tôi
              </Text>
              <Image
                source={Resources.common.iconArrowRight2}
                style={{
                  width: 10,
                  height: 15,
                }}
              />
            </View>
          </ImageBackground>
        </TouchableOpacity>

        {/* Main Content */}

        <View style={DrawerStyle.viewMainContent}>
          {this.state.listItem.map(item => {
            return (
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate(item.router);
                }}
                activeOpacity={0.8}
                key={item.id}
                style={DrawerStyle.listItem}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    style={{width: 40, height: 40}}
                    source={item.image}
                    resizeMode="contain"
                  />
                  <Text style={{fontSize: 15, marginLeft: 7}}>{item.text}</Text>
                </View>
                <Image
                  source={Resources.common.iconArrowRight}
                  style={{
                    width: 10,
                    height: 15,
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}
