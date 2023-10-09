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
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1%')
  },
  propertyImg: {
    width: '100%',
    height: hp('50%'),
    borderBottomRightRadius: hp('5%'),
    borderBottomLeftRadius: hp('5%'),
    resizeMode: 'cover',
  },
  headerView: {
    position: 'absolute',
    width: '100%',
  },
  // Content
  contentWrappr: {
    marginTop: hp('5%'),
    marginHorizontal: hp('2%'),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  propertyTitleTxt: {
    color: COLOR.WHITE,
    fontSize: hp('3%'),
    fontWeight: '700',
  },
  locationView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('1%'),
  },
  propertyLocationTxt: {
    color: COLOR.WHITE,
    fontSize: hp('2.3%'),
    marginLeft: hp('1%'),
  },
  descriptionTxt: {
    color: '#A8A8A8',
    fontSize: hp('2%'),
    textAlign: 'justify',
    lineHeight: hp('3%'),
  },
  BorderView: {
    width: '90%',
    borderBottomColor: COLOR.GRAY,
    borderBottomWidth: hp('0.1%'),
    alignSelf: 'center',
    marginTop: hp('3%'),
  },
  // Feature
  featureWrapper: {
    marginHorizontal: hp('2%'),
  },
  featureHeaddingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  featureTxt: {
    color: COLOR.WHITE,
    fontSize: hp('2.7%'),
  },
  seeallTxt: {
    color: COLOR.THEAMCOLOR,
    fontSize: hp('2%'),
    fontWeight: 'bold',
  },
  featureContentWrapper: {
    marginVertical: hp('3%'),
  },
  cotentTxt: {
    color: COLOR.WHITE,
    fontSize: hp('2%')
  },
  verifiedView: {
    backgroundColor: 'green',
    marginTop: hp('2%'),
    marginHorizontal: hp('2%')
  },
  ratingImg: {
    width: wp('20%'),
    height: wp('8%'),
    resizeMode: 'cover',
    alignSelf: 'flex-end'
  }
});

export default styles;
