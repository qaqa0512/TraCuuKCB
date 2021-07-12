import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import Resources from '../../constants/Images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default class PopupDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  render() {
    return (
      <View style={styles.modal}>
        <View style={styles.viewModal}>
          <View style={styles.topNoti}>
            <Text
              style={{
                width: 190,
                fontSize: 15,
                fontWeight: 'bold',
                color: '#0084BA',
              }}>
              Thanh tra Sở Y tế đã kiểm tra, xử phạt vi phạm hành chính
            </Text>
            <View style={styles.timeContainer}>
              <Text>07/06/2021</Text>
              <Text>10:32</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                this.props.closeModalDetails();
              }}>
              <Image
                source={Resources.common.iconClose}
                style={{width: 25, height: 25}}
              />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.bottomNoti}>
            <Text style={{fontSize: 15, lineHeight: 25, marginBottom: 20}}>
              Thanh tra Sở Y tế đã kiểm tra, xử phạt vi phạm hành chính
              9.500.000 đồng, đối với Ông Nguyễn Phúc Tùng(bác sĩ) - địa chỉ 2N
              Phạm Hữu Chí, phường 1, Quận 6, Thành phố Hồ Chí Minh, vì Người
              hành nghề chịu trách nhiệm chuyên môn kỹ thuật của cơ sở khám
              bệnh, chữa bệnh không có mặt tại cơ sở khám bệnh, chữa bệnh trong
              thời gian cơ sở đăng ký hoạt động mà không ủy quyền cho người khác
              theo quy định của pháp luật; Lập hồ sơ bệnh án nhưng không ghi rõ,
              đầy đủ các mục có trong hồ sơ bệnh án theo mẫu quy định của pháp
              luật và Tước quyền sử dụng chứng chỉ hành nghề khám bệnh, chữa
              bệnh trong thời hạn 02 tháng kể từ ngày 26/5/2021
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#000000AA',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  viewModal: {
    backgroundColor: 'white',
    height: hp('60%'),
    width: wp('95%'),
    borderRadius: 15,
    overflow: 'hidden',
  },
  topNoti: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F2F2F2',
    padding: 10,
  },
  bottomNoti: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
});
