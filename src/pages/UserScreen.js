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
import {UserStyle} from '../assets/styles';
import Resources from '../constants/Images';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconss from 'react-native-vector-icons/FontAwesome';

export default class UserScreen extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    // };
  }

  render() {
    return (
      // Top Header
      <View style={UserStyle.viewHeader}>
        <ImageBackground
          source={Resources.common.bgUser}
          style={{
            width: '100%',
            height: 70,
          }}>
          <View style={UserStyle.viewContent}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate(homeTabs.home);
              }}
              activeOpacity={0.8}>
              <Image
                source={Resources.common.iconArrowLeft}
                style={{width: 10, height: 25}}
              />
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                textTransform: 'uppercase',
                color: '#fff',
              }}>
              Thông tin tài khoản
            </Text>
            <TouchableOpacity activeOpacity={0.8}>
              <Icon name="edit" color="#fff" size={30} />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <ScrollView style={UserStyle.viewMainContent}>
          <View style={UserStyle.viewBackground}>
            <Image
              source={Resources.common.bgUser}
              style={{width: '100%', height: 150}}
            />
          </View>
          <View style={UserStyle.viewBackground1}>
            <View style={UserStyle.viewBlock}>
              <View style={UserStyle._Block1}>
                <View style={{position: 'absolute', top: -40}}>
                  <View style={UserStyle.backgroudCover}>
                    <Image
                      source={Resources.common.avatar2}
                      style={{width: 100, height: 100}}
                    />
                  </View>
                </View>
                <View style={UserStyle.viewText}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: 'bold',
                      marginBottom: 10,
                      textTransform: 'uppercase',
                    }}>
                    Thông tin của tôi
                  </Text>
                  <Text>Mã QR theo định dạnh của thẻ Bảo Hiểm Y Tế</Text>
                </View>
                <View style={UserStyle.viewQR}>
                  <View style={UserStyle.backGroundQR}>
                    <Image source={Resources.common.imgQR} />
                  </View>
                </View>
              </View>
              <View style={UserStyle._Block2}>
                <View style={UserStyle.commonContainer}>
                  <View style={UserStyle.viewCircle}>
                    <Iconss name="transgender" color="#0065BC" size={20} />
                  </View>
                  <Text style={UserStyle.txtInform}>Nam</Text>
                </View>
                <View style={UserStyle.commonContainer}>
                  <View style={UserStyle.viewCircle}>
                    <Iconss name="birthday-cake" color="#0065BC" size={20} />
                  </View>
                  <Text style={UserStyle.txtInform}>05/12/1999</Text>
                </View>
                <View style={UserStyle.commonContainer}>
                  <View style={UserStyle.viewCircle}>
                    <Iconss
                      name="volume-control-phone"
                      color="#0065BC"
                      size={20}
                    />
                  </View>
                  <Text style={UserStyle.txtInform}>0953xxxxxx</Text>
                </View>
              </View>
              <View style={UserStyle._Block3}>
                <View style={UserStyle.formContainer}>
                  <View style={UserStyle.viewField}>
                    <Text style={UserStyle.titleInform}>Họ tên</Text>
                    <View style={UserStyle.displayInform}>
                      <Text style={UserStyle.smallText}>John Hoàng</Text>
                    </View>
                  </View>
                  <View style={UserStyle.viewField}>
                    <Text style={UserStyle.titleInform}>Địa Chỉ</Text>
                    <View style={UserStyle.displayInform}>
                      <Text style={UserStyle.smallText}>44 Lê Văn Lương</Text>
                    </View>
                  </View>
                  <View style={UserStyle.viewField}>
                    <Text style={UserStyle.titleInform}>Email</Text>
                    <View style={UserStyle.displayInform}>
                      <Text style={UserStyle.smallText}>
                        hoandh123@gmail.com
                      </Text>
                    </View>
                  </View>
                  <View style={UserStyle.viewField}>
                    <Text style={UserStyle.titleInform}>Số thẻ BHYT</Text>
                    <View style={UserStyle.displayInform}>
                      <Text style={UserStyle.smallText}>123456789xxx</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
