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
import {mainStack, homeTabs} from '../config/navigator';
import {MarkStyle} from '../assets/styles';
import Resources from '../constants/Images';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/AntDesign';

export default class DetailNewsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medical: [
        {id: 1, name: 'Mắt'},
        {id: 2, name: 'Da liễu'},
        {id: 3, name: 'Hô hấp'},
        {id: 4, name: 'Nội tiết thận'},
        {id: 5, name: 'Hóa sinh'},
      ],
      disases: [
        {id: 1, content: 'Khô mắt'},
        {id: 2, content: 'Chấn thương mắt'},
        {id: 3, content: 'Đau mắt hột'},
        {id: 4, content: 'Mắt hột'},
        {id: 5, content: 'đau mắt đỏ'},
      ],
      searched: [
        {id: 1, content: 'Covid-19'},
        {id: 2, content: 'hô hấp'},
        {id: 3, content: 'khám da liễu'},
        {id: 4, content: 'nội nhi'},
        {id: 5, content: 'sỏi thận'},
      ],
    };
  }

  render() {
    return (
      // Top Header
      <View style={styles.overView}>
        <View style={styles.headerContainer}>
          <ImageBackground
            source={Resources.common.bgCommon}
            resizeMode="cover"
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'center',
            }}>
            <View style={styles.headerContent}>
              <TouchableOpacity style={styles.viewSearch} activeOpacity={0.8}>
                <Image
                  source={Resources.common.iconSearch2}
                  style={{width: 25, height: 25}}
                />
                <TextInput
                  placeholder="Nhập nội dung tìm kiếm"
                  style={styles.inputTxt}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate(homeTabs.home);
                }}>
                <Text style={{color: '#fff', fontSize: 15, fontWeight: '600'}}>
                  Hủy
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.mainContainer}>
          <ScrollView style={{flex: 1}}>
            <View style={styles.viewCommon}>
              <View style={styles.titleContainer}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                  Chuyên khoa
                </Text>
                <TouchableOpacity>
                  <Text style={{fontSize: 15, color: '#0084BA'}}>
                    Xem tất cả
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.listItem}>
                {this.state.medical.map(item => {
                  return (
                    <TouchableOpacity key={item.id} style={styles.btnContainer}>
                      <Text style={{color: '#727272'}}>{item.name}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
            <View style={styles.viewCommon}>
              <View style={styles.titleContainer}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                  Bệnh thường gặp
                </Text>
                <TouchableOpacity>
                  <Text style={{fontSize: 15, color: '#0084BA'}}>
                    Xem tất cả
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.listItem}>
                {this.state.disases.map(item => {
                  return (
                    <TouchableOpacity key={item.id} style={styles.btnContainer}>
                      <Text style={{color: '#727272'}}>{item.content}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
            <View style={styles.viewCommon}>
              <View style={styles.titleContainer}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                  Tìm kiếm nhiều
                </Text>
                <TouchableOpacity>
                  <Text style={{fontSize: 15, color: '#0084BA'}}>
                    Xem tất cả
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.listItem}>
                {this.state.searched.map(item => {
                  return (
                    <TouchableOpacity key={item.id} style={styles.btnContainer}>
                      <Text style={{color: '#727272'}}>{item.content}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
            <View style={styles.viewCommon}>
              <View style={styles.titleContainer}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                  Lịch sử tìm kiếm
                </Text>
                <TouchableOpacity>
                  <Text style={{fontSize: 15, color: '#0084BA'}}>
                    Xem tất cả
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.listItem}>
                <TouchableOpacity style={styles.btnContainer}>
                  <Text style={{color: '#727272'}}>Khô mắt</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  overView: {},
  headerContainer: {
    width: '100%',
    height: 85,
  },
  viewSearch: {
    width: '87%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  inputTxt: {
    width: '91%',
    marginLeft: 10,
  },
  mainContainer: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 10,
  },
  viewCommon: {
    width: '100%',
    height: 'auto',
    marginVertical: 5,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItem: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 7,
  },
  btnContainer: {
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: 5,
    margin: 4,
  },
});
