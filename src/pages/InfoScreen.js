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

export default class InfoScreen extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    // };
  }

  render() {
    return (
      // Top Header
      <View style={{flex: 1, backgroundColor: '#fff'}}>
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
                }}
                style={{
                  marginRight: 20,
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
                  Thông tin ứng dụng
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.viewVersion}>
          <Image
            source={Resources.common.iconSettings}
            style={{width: 60, height: 60}}
          />

          <View style={styles.detailVersion}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              Phiên bản ứng dụng
            </Text>
            <Text style={{marginVertical: 3}}>Version:1.0.16</Text>
            <Text>Build: 20201119.0000</Text>
            <TouchableOpacity>
              <Text style={{color: '#15789B', marginTop: 3}}>
                Kiểm tra cập nhật
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.viewVersion}>
          <Image
            source={Resources.common.iconSupport}
            style={{width: 60, height: 60}}
          />

          <View style={styles.detailVersion}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              Hỗ trợ trực tuyến
            </Text>
            <Text style={{marginVertical: 3}}>Điện thoại: 028 3930 9912</Text>
            <Text>Email: medinet.syt@tphcm.gov.vn</Text>
            {/* <TouchableOpacity>
              <Text style={{color: '#15789B', marginTop: 3}}>
                Kiểm tra cập nhật
              </Text>
            </TouchableOpacity> */}
          </View>
        </View>
        <View style={styles.viewVersion}>
          <Image
            source={Resources.common.iconSecurity}
            style={{width: 60, height: 60}}
          />
          <View style={styles.detailVersion}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              Thông tin bảo mật
            </Text>
            <TouchableOpacity>
              <Text style={{color: '#15789B', marginTop: 3}}>
                Chính sách bảo mật
              </Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity>
              <Text style={{color: '#15789B', marginTop: 3}}>
                Diều khoản sử dụng
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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
  bodyContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  },
  viewVersion: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#DADADA',
  },
  detailVersion: {
    marginLeft: 10,
  },
});
