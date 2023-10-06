import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {images} from '../../utils/Images';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLOR} from '../../utils/Colors';

const GetStart = ({navigation}) => {
  const GetStartHandilor = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.getStartContainer}>
      <Image
        source={images.GetStartBackground}
        style={styles.backgroundGetStart}
      />

      <View style={styles.getStartSloganConatiner}>
        <Text style={styles.getStartSloganOne}>Find a</Text>
        <Text style={styles.getStartSloganOne}>Home of</Text>
        <Text style={styles.getStartSloganTwo}>Your</Text>
        <Text style={styles.getStartSloganTwo}>Dreams</Text>
      </View>

      <TouchableOpacity
        style={styles.getStartSubmit}
        onPress={() => {
          GetStartHandilor();
        }}>
        <Text style={styles.getStartGetText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GetStart;

const styles = StyleSheet.create({
  getStartContainer: {
    flex: 1,
  },
  backgroundGetStart: {
    width: wp('100%'),
    height: hp('100%'),
    resizeMode: 'cover',
    position: 'absolute',
  },
  getStartSubmit: {
    backgroundColor: '#E84312',
    alignItems: 'center',
    position: 'absolute',
    bottom: hp('3.5%'),
    padding: hp('1%'),
    margin: hp('1%'),
    borderWidth: hp('0%'),
    borderRadius: hp('1%'),
    width: wp('85%'),
    alignSelf: 'center',
  },
  getStartGetText: {
    color: COLOR.WHITE,
    fontSize: hp('2%'),
    padding: hp('0.2%'),
  },
  getStartSloganConatiner: {
    position: 'absolute',
    bottom: hp('16.5%'),
    right: hp('10%'),
  },
  getStartSloganOne: {
    color: COLOR.WHITE,
    fontSize: hp('3.5%'),
  },
  getStartSloganTwo: {
    color: COLOR.WHITE,
    fontSize: hp('5%'),
  },
});
