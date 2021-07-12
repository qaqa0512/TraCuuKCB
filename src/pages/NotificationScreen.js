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
import {mainStack} from '../../config/navigator';
import {NotiStyle} from '../assets/styles';
import Resources from '../constants/Images';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/AntDesign';
import PopupDetails from './popup/PopDetails';

export default class NotificationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notification: [
        {
          id: 1,
          info: ' Thanh tra Sở Y tế đã kiểm tra, xử phạt vi phạm hành chính 9.500.000 đồng, đối với Ông Nguyễn Phúc Tùng(bác sĩ) - địa chỉ 2N Phạm Hữu Chí, phường 1, Quận 6, Thành phố Hồ Chí Minh, vì Người hành nghề chịu trách nhiệm chuyên môn kỹ',
        },
        {
          id: 2,
          info: ' Thanh tra Sở Y tế đã kiểm tra, xử phạt vi phạm hành chính 152.700.000 đồng, đối với Công ty TNHH Thương mại Dịch vụ Nam học thành phó Hồ Chí Minh - VN - địa chỉ 2N Phạm Hữu Chí, phường 1, Quận 6, Thành phố Hồ Chí Minh, vì Người hành nghề chịu trách nhiệm chuyên môn kỹ',
        },
        {
          id: 3,
          info: ' Thanh tra Sở Y tế đã kiểm tra, xử phạt vi phạm hành chính 9.500.000 đồng, đối với Ông Nguyễn Phúc Tùng(bác sĩ) - địa chỉ 2N Phạm Hữu Chí, phường 1, Quận 6, Thành phố Hồ Chí Minh, vì Người hành nghề chịu trách nhiệm chuyên môn kỹ',
        },
        {
          id: 4,
          info: ' Thanh tra Sở Y tế đã kiểm tra, xử phạt vi phạm hành chính 9.500.000 đồng, đối với Ông Nguyễn Phúc Tùng(bác sĩ) - địa chỉ 2N Phạm Hữu Chí, phường 1, Quận 6, Thành phố Hồ Chí Minh, vì Người hành nghề chịu trách nhiệm chuyên môn kỹ',
        },
        {
          id: 5,
          info: ' Thanh tra Sở Y tế đã kiểm tra, xử phạt vi phạm hành chính 9.500.000 đồng, đối với Ông Nguyễn Phúc Tùng(bác sĩ) - địa chỉ 2N Phạm Hữu Chí, phường 1, Quận 6, Thành phố Hồ Chí Minh, vì Người hành nghề chịu trách nhiệm chuyên môn kỹ',
        },
      ],
    };
  }

  showModalDetails = () => {
    this.setState({details: true});
  };
  closeModalDetails = () =>
    this.setState({
      details: !this.state.details,
    });

  render() {
    return (
      // Top Header
      <View style={{flex: 1}}>
        <View style={NotiStyle.headerContainer}>
          <ImageBackground
            source={Resources.common.bgCommon}
            resizeMode="cover"
            style={{width: '100%', height: '100%', justifyContent: 'center'}}>
            <View style={NotiStyle.headerContent}>
              <Text
                style={{
                  fontSize: 17,
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  color: '#fff',
                }}>
                Thông báo
              </Text>
            </View>
          </ImageBackground>
        </View>

        <ScrollView style={NotiStyle.bodyContainer}>
          {this.state.notification.map(item => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                key={item.id}
                style={NotiStyle.notiItem}
                onPress={() => {
                  this.showModalDetails();
                }}>
                <View style={NotiStyle.topNoti}>
                  <Text
                    style={{
                      width: 190,
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: '#0084BA',
                    }}>
                    Thanh tra Sở Y tế đã kiểm tra, xử phạt vi phạm hành chính
                  </Text>
                  <View style={NotiStyle.timeContainer}>
                    <Text>07/06/2021</Text>
                    <Text>10:32</Text>
                  </View>
                  <TouchableOpacity activeOpacity={0.5}>
                    <Image
                      source={Resources.common.iconClose}
                      style={{width: 25, height: 25}}
                    />
                  </TouchableOpacity>
                </View>
                <View style={NotiStyle.bottomNoti}>
                  <Text style={{fontSize: 15}} numberOfLines={5}>
                    {item.info.trim()}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.showModalDetails();
                    }}>
                    <Text
                      style={{
                        color: '#0084BA',
                      }}>
                      Xem thêm
                    </Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        {this.state.details ? (
          <PopupDetails
            showModalDetails={this.state.showModalDetails}
            closeModalDetails={this.closeModalDetails}
            // error={this.state.error}
            {...this.props}
          />
        ) : null}
      </View>
    );
  }
}
