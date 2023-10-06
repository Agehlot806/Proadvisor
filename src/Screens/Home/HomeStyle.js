import {COLOR} from '../../utils/Colors';

const {StyleSheet} = require('react-native');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLOR.PRIMERYCOLOR,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationWrapper: {
    marginVertical: hp('2.3%'),
    marginHorizontal: hp('2%'),
  },
  loationInputWrapper: {
    backgroundColor: COLOR.WHITE,
    height: hp('8%'),
    borderRadius: hp('1.5%'),
  },
  locationInput: {
    color: COLOR.THEAMCOLOR,
    fontSize: hp('2%'),
    fontWeight: 'bold',
  },
  // category
  categoryWrapper: {
    marginHorizontal: hp('2%'),
  },
  categoryView: {
    backgroundColor: COLOR.LIGHTGRAY,
    width: '100%',
    height: hp('8%'),
    borderRadius: hp('1.5%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: hp('1%'),
  },
  categoryBlock: {
    backgroundColor: COLOR.WHITE,
    width: wp('28%'),
    height: hp('6%'),
    borderRadius: hp('1.5%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryTxt: {
    fontSize: hp('2.2%'),
    fontWeight: '500',
  },
  resultBtn: {
    backgroundColor: COLOR.THEAMCOLOR,
    width: '100%',
    height: hp('7.5%'),
    marginTop: hp('3%'),
    borderRadius: hp('1%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultBtnTXt: {
    color: COLOR.WHITE,
    fontSize: hp('2.5%'),
    fontWeight: '500',
  },
  // Property
  propertyWrapper: {
    marginHorizontal: hp('2%'),
    marginVertical: hp('3.5%'),
  },
  propertyHeadingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: COLOR.THEAMCOLOR,
    borderBottomWidth: hp('0.1%'),
  },
  propertyHeadingTxt: {
    color: COLOR.WHITE,
    fontSize: hp('3%'),
    marginBottom: hp('1%'),
  },
  propertyBoxWrpper: {
    width: '100%',
    marginVertical: hp('5%'),
    alignItems: 'center',
  },
  radioButton: {
    height: wp('5.5%'),
    width: wp('5.5%'),
    borderRadius: hp('50%'),
    borderWidth: hp('0.3%'),
    borderColor: COLOR.THEAMCOLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioDot: {
    height: wp('3.2%'),
    width: wp('3.2%'),
    borderRadius: hp('50%'),
    backgroundColor: COLOR.THEAMCOLOR,
  },
  // property slider
  propertySliderBox: {
    flex: 1,
  },
  propertySliderImg: {
    width: '100%',
    height: hp('25%'),
    resizeMode: 'cover',
    borderRadius: hp('1.5%'),
    borderWidth: hp('0.1%'),
    borderColor: COLOR.THEAMCOLOR,
  },
  propertySliderTxt: {
    color: COLOR.WHITE,
    fontSize: hp('2%'),
    marginTop: hp('1%'),
  },
  featurdBox: {
    backgroundColor: COLOR.THEAMCOLOR,
    width: wp('20%'),
    height: hp('3%'),
    borderTopEndRadius: hp('20%'),
    borderBottomEndRadius: hp('20%'),
  },
  featuredTxt: {
    color: COLOR.WHITE,
    fontSize: hp('2%'),
    marginLeft: hp('1%'),
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('2%'),
  },
  dot: {
    width: wp('2.5%'),
    height: wp('2.5%'),
    borderRadius: hp('5%'),
    marginHorizontal: hp('1%'),
  },
  // Property Box
  propertyBox: {
    width: '100%',
    height: hp('20%'),
    flexDirection: 'row',
    marginBottom: hp('3%')
  },
  propertyBoxImg: {
    width: '100%',
    height: hp('20%'),
    resizeMode: 'cover',
  },
  propertyName: {
    color: COLOR.WHITE,
    fontSize: hp('3%'),
    fontWeight: 'bold'
  },
  phoneCallView: {
    backgroundColor: COLOR.THEAMCOLOR,
    width: wp('5.5%'),
    height: hp('3.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp('0.5%'),
  },
  propertySmallTxt: {
    color: COLOR.WHITE,
    fontSize: hp('1.8%'),
  },
  stausBox: {
    backgroundColor: COLOR.THEAMCOLOR,
    width: wp('20%'),
    height: hp('2.5%'),
    borderRadius: hp('0.5%'),
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
