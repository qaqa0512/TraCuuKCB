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
import {
  NavigationContainer,
  DrawerActions,
  useNavigation,
} from '@react-navigation/native';
import {mainStack, homeTabs} from '../config/navigator';
import {HomeStyle} from '../assets/styles';
import Resources from '../constants/Images';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/AntDesign';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {id: 1, image: Resources.common.bannerHome1},
        {id: 2, image: Resources.common.bannerHome2},
      ],
      news: [
        {
          id: 1,
          list: 'Bộ trưởng Bộ Y tế: Khoảng 30 triệu liều vắc xin phòng COVID-19 sẽ về Việt Nam trong Quý III/2021',
          time: '02/07/2021 08:51',
        },
        {
          id: 2,
          list: 'Bộ Y tế họp triển khai công tác cải cách hành chính năm 2021',
          time: '02/07/2021 08:50',
        },
        {
          id: 3,
          list: 'Siết chặt các giải pháp đảm bảo an toàn cho các bệnh viện',
          time: '01/07/2021 09:03',
        },
        {
          id: 4,
          list: 'Thủ tướng Chính phủ nỗ lực thúc đẩy đưa vaccine về nước sớm nhất, nhiều nhất',
          time: '01/07/2021 09:01',
        },
        {
          id: 5,
          list: 'Bộ trưởng Bộ Y tế đề nghị lãnh đạo Ngân hàng Thế giới hỗ trợ nghiên cứu, sản xuất vaccine tại Việt Nam',
          time: '30/06/2021 08:08',
        },
      ],
      navigation: {},
    };
  }

  render() {
    return (
      // Top Header
      <ImageBackground
        source={Resources.common.bgHome}
        style={HomeStyle.topBanner}>
        {/* Header Title */}

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={HomeStyle.viewMenu}
            onPress={() => this.props.navigation.openDrawer()}>
            <Image
              source={Resources.common.iconMenu}
              style={{width: 25, height: 20}}
            />
          </TouchableOpacity>
          <View style={HomeStyle.headerTitleContainer}>
            <Text style={HomeStyle.headerTitle}>Tra cứu khám chữa bệnh</Text>
          </View>
        </View>

        {/* Main Content */}
        <View style={HomeStyle.bodyContainer}>
          <ScrollView style={{flex: 1}}>
            <View style={HomeStyle.viewContentContainer}>
              <Image
                source={Resources.common.imgTop}
                style={HomeStyle.viewTopImg}
              />

              <TouchableOpacity
                style={HomeStyle.viewSearch}
                activeOpacity={0.8}
                onPress={() => {
                  this.props.navigation.navigate(mainStack.detailNews);
                }}>
                <Text style={HomeStyle.textSearch}>Nhập nội dung tìm kiếm</Text>
                <Image
                  source={Resources.common.iconSearch}
                  style={HomeStyle.iconSearchTxt}
                />
              </TouchableOpacity>

              <View style={HomeStyle.viewMedical}>
                <Text style={HomeStyle.medicalTitle}>Chuyên khoa:</Text>
                <View style={HomeStyle.listTop}>
                  <TouchableOpacity style={HomeStyle.btnItem}>
                    <Text style={HomeStyle.txtItem}>Mắt</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={HomeStyle.btnItem}>
                    <Text style={HomeStyle.txtItem}>Da liễu</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={HomeStyle.btnItem}>
                    <Text style={HomeStyle.txtItem}>Hô hấp</Text>
                  </TouchableOpacity>
                </View>
                <View style={HomeStyle.listBottom}>
                  <TouchableOpacity style={HomeStyle.btnItem}>
                    <Text style={HomeStyle.txtItem}>Nội tiết thận</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={HomeStyle.btnItem}>
                    <Text style={HomeStyle.txtItem}>Da liễu</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={HomeStyle.btnItem}>
                    <Text style={HomeStyle.txtItem}>Hô hấp</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={HomeStyle.viewDisases}>
                <Text style={HomeStyle.medicalTitle}>Bệnh thường gặp:</Text>
                <View style={HomeStyle.listTop}>
                  <TouchableOpacity style={HomeStyle.btnItem}>
                    <Text style={HomeStyle.txtItem}>Khô mắt</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={HomeStyle.btnItem}>
                    <Text style={HomeStyle.txtItem}>Chấn thương mắt</Text>
                  </TouchableOpacity>
                </View>
                <View style={HomeStyle.listBottom}>
                  <TouchableOpacity style={HomeStyle.btnItem}>
                    <Text style={HomeStyle.txtItem}>đau mắt hột</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={HomeStyle.btnItem}>
                    <Text style={HomeStyle.txtItem}>Mắt hột</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={HomeStyle.btnItem}>
                    <Text style={HomeStyle.txtItem}>đau mắt đỏ</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={HomeStyle.viewSlide}>
                <Swiper
                  showsPagination={false}
                  autoplay={true}
                  loop
                  autoplayTimeout={5}
                  containerStyle={{height: '100%'}}>
                  {this.state.images.map(item => {
                    return (
                      <ImageBackground
                        key={item.id}
                        style={HomeStyle.bannerHome1}
                        source={item.image}
                        resizeMode="stretch"
                      />
                    );
                  })}
                </Swiper>
              </View>

              <Text style={HomeStyle.newsTitle}>Tin mới nhất:</Text>

              {this.state.news.map(item => {
                return (
                  <TouchableOpacity
                    key={item.id}
                    style={HomeStyle.viewNews}
                    activeOpacity={0.8}>
                    <View style={HomeStyle.listNewsItems}>
                      <Image
                        source={Resources.common.imgRandom}
                        style={HomeStyle.imgNews}
                      />
                      <View style={HomeStyle.newsContent}>
                        <Text style={{fontSize: 15}}>{item.list}</Text>
                        <View style={HomeStyle.newsTime}>
                          <Image
                            source={Resources.common.iconClock}
                            style={HomeStyle.iconClock}
                          />
                          <Text>{item.time}</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}

              <TouchableOpacity
                style={HomeStyle.viewMore}
                onPress={() => {
                  this.props.navigation.navigate(homeTabs.news);
                }}>
                <Text style={{color: '#269DDA', fontSize: 15}}>Xem thêm</Text>
                <Icon
                  name="doubleright"
                  color="#269DDA"
                  size={9}
                  style={{marginLeft: 5, marginTop: 3}}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}
