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
import {mainStack, homeTabs} from '../config/navigator';
import {MarkStyle} from '../assets/styles';
import Resources from '../constants/Images';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/AntDesign';

export default class MarkedScreen extends Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }

  render() {
    return (
      // Top Header
      <View style={MarkStyle.headerContainer}>
        <ImageBackground
          source={Resources.common.bgCommon}
          resizeMode="cover"
          style={{width: '100%', height: '100%', justifyContent: 'center'}}>
          <View style={MarkStyle.headerContent}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate(homeTabs.home);
              }}>
              <Image
                source={Resources.common.iconArrowLeft}
                style={{width: 10, height: 20, marginRight: 55}}
              />
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 17,
                textTransform: 'uppercase',
                fontWeight: 'bold',
                color: '#fff',
                position: 'absolute',
                left: '27%',
              }}>
              Cơ sở y tế đã đánh dấu
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
