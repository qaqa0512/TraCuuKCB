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
import {NewsStyle} from '../assets/styles';
import Resources from '../constants/Images';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/AntDesign';

export default class NewsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [
        {
          id: 1,
          title: 'Người ra, vào TPHCM phải được kiểm soát chặt chẽ',
          name: ' TPHCM cần kiểm soát chặt chẽ người ra, vào bằng mã QR cá nhântích hợp khai báo y tế, kết quả xét nghiệm, tiêm vaccine, đồngthời bảo đảm',
          img: Resources.common.bannerHome1,
        },
        {
          id: 2,
          title:
            'Bộ trưởng Nguyễn Thanh Long: Cơ bản kiểm soát dịch tại phía Bắc chú trọng chống dịch tại TP Hồ Chí Minh và các tỉnh phía Nam',
          name: 'Theo Bộ trưởng Bộ Y tế Nguyễn Thanh Long, tại Việt Nam, tình hình dịch bệnh COVID-19 vẫn đang được kiểm soát về tổng thể. Riêng tại TP Hồ Chí Minh',
          img: Resources.common.bannerHome2,
        },
        {
          id: 3,
          title:
            'TPHCM cần quyết tâm để đến cuối tháng 7, dịch COVID-19 "giảm rõ, giảm sâu"',
          name: ' TPHCM cần kiểm soát chặt chẽ người ra, vào bằng mã QR cá nhântích hợp khai báo y tế, kết quả xét nghiệm, tiêm vaccine, đồngthời bảo đảm',
          img: Resources.common.bannerHome1,
        },
        {
          id: 4,
          title:
            'Bộ trưởng Bộ Y tế: Khoảng 30 triệu liều vắc xin phòng COVID-19 sẽ về Việt Nam trong Quý III/2021',
          name: ' Theo Bộ trưởng Bộ Y tế Nguyễn Thanh Long, tại Việt Nam, tình hình dịch bệnh COVID-19 vẫn đang được kiểm soát về tổng thể. Riêng tại TP Hồ Chí Minh',
          img: Resources.common.bannerHome2,
        },
        {
          id: 5,
          title:
            'Bộ trưởng Nguyễn Thanh Long: Cơ bản kiểm soát dịch tại phía Bắc chú trọng chống dịch tại TP Hồ Chí Minh và các tỉnh phía Nam',
          name: ' TPHCM cần kiểm soát chặt chẽ người ra, vào bằng mã QR cá nhântích hợp khai báo y tế, kết quả xét nghiệm, tiêm vaccine, đồngthời bảo đảm',
          img: Resources.common.bannerHome1,
        },
        {
          id: 6,
          title:
            'TPHCM cần quyết tâm để đến cuối tháng 7, dịch COVID-19 "giảm rõ, giảm sâu"',
          name: ' Theo Bộ trưởng Bộ Y tế Nguyễn Thanh Long, tại Việt Nam, tình hình dịch bệnh COVID-19 vẫn đang được kiểm soát về tổng thể. Riêng tại TP Hồ Chí Minh',
          img: Resources.common.bannerHome2,
        },
      ],
    };
  }

  render() {
    return (
      // Top Header
      <View style={{flex: 1}}>
        <View style={NewsStyle.headerContainer}>
          <ImageBackground
            source={Resources.common.bgCommon}
            resizeMode="cover"
            style={{width: '100%', height: '100%', justifyContent: 'center'}}>
            <View style={NewsStyle.headerContent}>
              <Text
                style={{
                  fontSize: 17,
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  color: '#fff',
                }}>
                Tin tức
              </Text>
            </View>
          </ImageBackground>
        </View>
        <ScrollView style={NewsStyle.bodyContainer}>
          {this.state.news.map(item => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                key={item.id}
                style={NewsStyle.listNews}>
                <Image
                  source={item.img}
                  style={{width: '100%', height: 170}}
                  resizeMode="cover"
                />
                <View style={{width: '100%', padding: 10}}>
                  <Text style={{fontWeight: 'bold', fontSize: 16}}>
                    {item.title}
                  </Text>
                  <View style={NewsStyle.newsSum}>
                    <View style={NewsStyle.viewTime}>
                      <Image
                        source={Resources.common.iconClock}
                        style={{width: 17, height: 17, marginRight: 3}}
                      />
                      <Text>06/07/2021 09:45</Text>
                    </View>
                    <Text numberOfLines={2}>{item.name}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
