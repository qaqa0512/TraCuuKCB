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
    paddingHorizontal: 15,
  },
  listNews: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 10,
    marginTop: 15,
    overflow: 'hidden',
  },
  newsSum: {
    marginTop: 7,
  },
  viewTime: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default styles;
