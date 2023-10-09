import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Back, Star} from '../../utils/Svg';
import {COLOR} from '../../utils/Colors';

const LoginOTP = ({navigation}) => {
  const [otp, setOtp] = useState(['', '', '', '', '']);

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    if (index < 4 && value !== '') {
      this[`otpInput${index + 1}`].focus();
    } else if (index > 0 && value === '') {
      this[`otpInput${index - 1}`].focus();
    }

    setOtp(newOtp);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: hp('2.5%'),
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Back height={hp('5%')} width={wp('10%')} />
        </TouchableOpacity>
        <Star height={hp('5%')} width={wp('10%')} />
      </View>
      <View styles={styles.subContainer}>
        <Text style={[styles.heading, {marginTop: hp('10%')}]}>
          Verify your phone
        </Text>
        <Text style={[styles.heading, {marginBottom: hp('2%')}]}> number</Text>
        <Text style={styles.phoneText}>
          We've sent an SMS with an activation code
        </Text>
        <Text style={[styles.phoneText, {marginBottom: hp('2%')}]}>
          to your phone +91 00000 12345
        </Text>
        <View style={styles.otpContainer}>
          {otp.map((value, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              onChangeText={text => handleOtpChange(index, text)}
              value={value}
              maxLength={1}
              keyboardType="numeric"
              ref={ref => (this[`otpInput${index}`] = ref)}
            />
          ))}
        </View>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Text style={styles.errorText}>I didn't receive a code</Text>
          <TouchableOpacity style={styles.resendButton}>
            <Text style={styles.resendText}>Resend</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.verifyButton}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={styles.verifyButtonText}>Verify all</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginOTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232D3F',
  },
  subContainer: {
    alignItems: 'center',
    paddingLeft: hp('2%'),
    paddingRight: hp('2%'),
  },
  heading: {
    color: 'white',
    fontSize: hp('3%'),
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  phoneText: {
    color: 'rgb(255, 255, 255)',
    fontSize: hp('2%'),
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: hp('2%'),
    marginTop: hp('4%'),
  },
  otpInput: {
    width: wp('13%'),
    height: hp('6%'),
    fontSize: hp('2%'),
    marginHorizontal: wp('1%'),
    textAlign: 'center',
    borderColor: '#FFFFFF',
    borderWidth: hp('0.1%'),
    borderRadius: hp('1%'),
    color: COLOR.WHITE,
  },
  errorText: {
    color: COLOR.WHITE,
    fontSize: hp('2%'),
    marginBottom: hp('2%'),
  },
  resendButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp('2%'),
  },
  resendText: {
    color: '#E84312',
    fontSize: hp('2%'),
    marginLeft: hp('1%'),
  },
  verifyButton: {
    backgroundColor: '#E84312',
    width: wp('85%'),
    height: hp('5.5%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp('1%'),
    alignSelf: 'center',
    marginTop: hp('5%'),
  },
  verifyButtonText: {
    color: 'white',
    fontSize: hp('2%'),
    fontWeight: 'bold',
  },
});
