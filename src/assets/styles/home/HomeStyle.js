import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  //Header
  topBanner: {
    width: '100%',
    height: '110%',
  },
  headerTitleContainer: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    marginLeft: 10,
  },
  viewMenu: {
    position: 'absolute',
    top: 25,
    left: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 17,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },

  // Body Container
  bodyContainer: {
    flex: 1,
  },
  viewContentContainer: {
    flex: 1,
    marginHorizontal: 30,
    // borderWidth: 1,
    marginTop: 5,
    paddingBottom: 55,
  },
  viewTopImg: {
    width: 95,
    height: 95,
    marginVertical: 30,
    alignSelf: 'center',
  },
  viewSearch: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    backgroundColor: '#F8F8F8',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  textSearch: {
    color: '#727272',
    fontSize: 15,
  },
  iconSearchTxt: {
    width: 20,
    height: 20,
  },

  // View Medical
  viewMedical: {
    width: '100%',
    height: 100,
    // borderWidth: 1,
    marginVertical: 15,
  },
  viewDisases: {
    width: '100%',
    height: 100,
  },
  medicalTitle: {
    fontSize: 15,
    fontWeight: '700',
    // borderWidth: 1,
    marginBottom: 7,
  },
  listTop: {
    flexDirection: 'row',
    marginBottom: 7,
  },
  listBottom: {
    flexDirection: 'row',
  },
  btnItem: {
    borderWidth: 1,
    borderColor: '#D4D4D4',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  txtItem: {
    color: '#727272',
  },

  // View Slide
  viewSlide: {
    width: '100%',
    height: 140,
    marginVertical: 20,
    borderRadius: 7,
    flexDirection: 'row',
  },
  bannerHome1: {
    width: '100%',
    height: '100%',
    borderRadius: 7,
    marginRight: 10,
  },
  bannerHome2: {
    width: '100%',
    height: '100%',
    borderRadius: 7,
  },

  // View News
  viewNews: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
  },
  newsTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  listNewsItems: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  imgNews: {
    width: 90,
    height: 100,
    resizeMode: 'cover',
  },
  newsContent: {
    width: 200,
    marginLeft: 10,
  },
  newsTime: {
    flexDirection: 'row',
    marginTop: 7,
  },
  iconClock: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
    marginRight: 5,
  },

  // View More
  viewMore: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    color: '#269DDA',
  },
});
export default styles;
