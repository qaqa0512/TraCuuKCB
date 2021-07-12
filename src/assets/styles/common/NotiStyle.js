import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  //Header
  headerContainer: {
    width: '100%',
    height: 70,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  bodyContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  notiItem: {
    width: '100%',
    height: 'auto',
    borderWidth: 1,
    marginTop: 10,
    borderColor: '#DADADA',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  topNoti: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F2F2F2',
    padding: 10,
  },
  timeContainer: {
    alignItems: 'flex-end',
  },
  bottomNoti: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
  },
});
export default styles;
