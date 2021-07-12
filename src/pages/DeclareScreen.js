import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {mainStack} from '../config/navigator';
import Resources from '../constants/Images';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/AntDesign';

export default class DeclareScreen extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    // };
  }

  render() {
    return (
      // Top Header
      <View style={styles.headerContainer}>
        <ImageBackground
          source={Resources.common.bgCommon}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            // alignItems: 'center',
          }}>
          <View style={styles.headerContent}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <Image
                source={Resources.common.iconArrowLeft}
                style={{
                  width: 10,
                  height: 20,
                }}
              />
            </TouchableOpacity>

            <View style={styles.textContainer}>
              <Text
                style={{
                  fontSize: 17,
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  color: '#fff',
                }}>
                Lịch sử khai báo y tế
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //Header
  headerContainer: {
    width: '100%',
    height: 70,
  },
  headerContent: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  textContainer: {
    position: 'absolute',
    left: '27%',
  },
});
