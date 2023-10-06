import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {images} from '../../utils/Images';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Login = () => {
  return (
    <View style={styles.loginContainer}>
      <Image
        source={images.LoginBackground}
        style={styles.backgroundGetStart}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
  },
  backgroundGetStart: {
    width: wp('100%'),
    height: hp('100%'),
    resizeMode: 'cover',
    position: 'absolute',
  },
});
