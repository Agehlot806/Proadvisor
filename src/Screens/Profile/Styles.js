const {StyleSheet} = require('react-native');
const {COLOR} = require('../../utils/Colors');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: COLOR.PRIMERYCOLOR,
  },
  headerView: {},
  profileContentView: {
    alignItems: 'center',
  },
  profileHeading: {
    color: COLOR.WHITE,
    fontSize: hp('3.5%'),
    fontWeight: 'bold',
  },
  profileView: {
    marginTop: hp('2%')
  },
  profileImg: {
    width: wp('25%'),
    height: wp('25%'),
    borderRadius: hp('50%'),
    resizeMode: 'cover'
  }
});

export default styles;
