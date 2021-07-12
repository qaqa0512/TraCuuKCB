import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  //Header
  viewTopContainer: {
    width: '100%',
    height: 150,
  },
  viewTopContent: {
    width: '100%',
    marginHorizontal: 10,
  },
  viewProfile: {
    marginHorizontal: 10,
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  // Main Content
  viewMainContent: {
    flex: 1,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DADADA',
  },
});
export default styles;
