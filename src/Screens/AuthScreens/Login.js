import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {images} from '../../utils/Images';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLOR} from '../../utils/Colors';
import {LoginUncle} from '../../utils/Svg';

const Login = ({navigation}) => {
  const loginHandilor = () => {
    navigation.navigate('LoginOTP');
  };
  const signUpHandilor = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.loginContainer}>
      <Image source={images.LoginBackground} style={styles.loginBackground} />
      <View style={styles.loginDataContainer}>
        <View style={styles.phoneContainer}>
          <View style={styles.uncleImage}>
            <LoginUncle height={hp('25%')} width={wp('30%')} />
          </View>
          <Text style={styles.loginHeaderText}>Log In Now</Text>
          <Text style={styles.getStartText}>Get let's try our property.</Text>
          <Text style={[styles.textInputTitle, {alignSelf: 'flex-start'}]}>
            Phone Number
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="+91 6305784457"
            placeholderTextColor="white"
          />
        </View>

        <View style={styles.phoneContainer}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              loginHandilor();
            }}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => {
              signUpHandilor();
            }}>
            <Text
              style={[styles.dontHaveAccountText, {marginRight: hp('0.5%')}]}>
              You don’t have any account ?
            </Text>
            <Text style={[styles.dontHaveAccountText, {color: '#FFFFFF'}]}>
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  loginBackground: {
    width: wp('100%'),
    height: hp('100%'),
    resizeMode: 'cover',
    position: 'absolute',
  },
  loginDataContainer: {
    position: 'absolute',
    bottom: hp('4.5%'),
    width: wp('100%'),
    alignItems: 'center',
  },
  loginHeaderText: {
    fontSize: hp('3.5%'),
    fontWeight: 'bold',
    color: COLOR.WHITE,
    alignSelf: 'flex-start',
  },
  getStartText: {
    color: COLOR.WHITE,
    alignSelf: 'flex-start',
    marginBottom: hp('6.5%'),
    fontSize: hp('2%'),
    marginBottom: hp('6%'),
  },
  phoneContainer: {
    width: wp('90%'),
    alignItems: 'center',
    padding: hp('1%'),
    paddingBottom: hp('1.5%'),
  },
  textInputTitle: {
    color: COLOR.WHITE,
    marginBottom: hp('1%'),
  },
  textInput: {
    backgroundColor: 'transparent',
    borderWidth: hp('0.1%'),
    borderColor: 'white',
    color: 'white',
    borderRadius: hp('1%'),
    padding: hp('1%'),
    width: '100%',
    paddingLeft: hp('1.5%'),
  },
  loginButton: {
    backgroundColor: '#E84312',
    borderRadius: hp('1%'),
    paddingVertical: hp('1.5%'),
    width: '100%',
    alignItems: 'center',
  },
  loginButtonText: {
    fontWeight: 'bold',
    color: COLOR.WHITE,
  },
  dontHaveAccountText: {
    color: '#E2E2E2',
    marginTop: hp('1%'),
  },
  uncleImage: {
    position: 'absolute',
    right: hp('3%'),
    bottom: hp('7.5%'),
  },
});
