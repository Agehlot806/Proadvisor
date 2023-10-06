import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Back, BackWhite, Fav, MenuIcon, SearchIcon, SettingIcon} from '../utils/Svg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {images} from '../utils/Images';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { COLOR } from '../utils/Colors';

const Header = props => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <View style={{paddingTop: insets.top}} />
      <StatusBar
        backgroundColor={props.statusbarColor}
        barStyle={'light-content'}
        translucent={props.translucent ? props.translucent : false}
      />
      <View style={styles.headerView}>
        <View style={styles.rowcontainer}>
          {props.menu && (
            <TouchableOpacity>
              <MenuIcon width={wp('5.5%')} height={hp('3%')} />
            </TouchableOpacity>
          )}
          {/* {props.back && (
            <TouchableOpacity onPress={() => props.handleBackPress()}>
              {props.backBtnColor === '#fff' ? (
                <BackWhite width={wp('8%')} height={hp('5%')} />
              ) : (
                <Back width={wp('8%')} height={hp('5%')} />
              )}
            </TouchableOpacity>
          )} */}
          <Text style={styles.titleTxt}>{props.title}</Text>
        </View>
        <View style={styles.rowcontainer}>
          {props.search && (
            <TouchableOpacity style={{marginRight: hp('2%')}}>
              <SearchIcon width={wp('7%')} height={hp('5%')} />
            </TouchableOpacity>
          )}
          {props.profile && (
            <TouchableOpacity onPress={() => props.onPressProfile()}>
              <Image source={images.profile} style={styles.profileImg} />
            </TouchableOpacity>
          )}
          {props.fav && (
            <TouchableOpacity>
              <Fav width={wp('7%')} height={hp('5%')} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: hp('6%'),
    marginHorizontal: hp('2%'),
    marginVertical: hp('2%'),
  },
  rowcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImg: {
    width: wp('10%'),
    height: wp('10%'),
    borderRadius: hp('5%'),
  },
  titleTxt: {
    color: COLOR.WHITE,
    marginLeft: hp('2%'),
    fontSize: hp('3%'),
    fontWeight: 'bold'
  }
});
