import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  //Header
  viewHeader: {width: '100%', height: '100%'},
  viewContent: {
    width: '100%',
    flexDirection: 'row',
    // backgroundColor: 'red',
    // justifyContent: 'space-between',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 25,
  },
  viewMainContent: {width: '100%', height: '100%'},
  viewBackground: {
    width: '100%',
    height: 50,
    backgroundColor: 'yellow',
  },
  viewBackground1: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 15,
  },
  viewBlock: {
    width: '100%',
    height: 'auto',
  },
  // Block 1
  _Block1: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
  },
  backgroudCover: {
    width: 110,
    height: 110,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 55,
  },
  viewText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 20,
  },
  viewQR: {
    width: 140,
    height: 140,
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  backGroundQR: {
    width: 130,
    height: 130,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Block 2
  _Block2: {
    width: '100%',
    height: 'auto',
    marginTop: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 20,
  },
  commonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewCircle: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#0065BC',
  },
  txtInform: {
    fontSize: 13,
    marginTop: 5,
  },

  // Block3
  _Block3: {
    width: '100%',
    height: 'auto',
    marginTop: 10,
    borderRadius: 20,
    padding: 15,
    backgroundColor: '#fff',
  },
  formContainer: {
    width: '100%',
    height: 'auto',
  },
  viewField: {
    width: '100%',
    height: 'auto',
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#f7f7f7',
  },
  titleInform: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  smallText: {
    marginBottom: 5,
  },
});
export default styles;
