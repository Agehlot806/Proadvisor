import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {images} from '../../utils/Images';
import {COLOR} from '../../utils/Colors';

const BookYourHome = ({navigation}) => {
  return (
    <View style={styles.bookYourHomeContainer}>
      <Image
        source={images.BookYourHomeBackground}
        style={styles.bookYourHomeBackground}
      />
      <View style={styles.overlay}>
        <Text style={styles.headerText}>Book Your Home</Text>

        <View style={styles.priceContainer}>
          <Text style={styles.labelText}>Price:</Text>
          <Text style={styles.valueText}>5000</Text>
        </View>

        <View style={styles.paymentMethods}>
          <Text style={styles.paymentMethodsText}>Add Payment Method</Text>
          <View style={styles.paymentMethodOptions}>
            <View style={[styles.payContainer]}>
              <Text style={styles.pay}>Gpay</Text>
            </View>
            <View style={[styles.payContainer]}>
              <Text style={styles.pay}>Ppay</Text>
            </View>
            <View style={[styles.payContainer]}>
              <Text style={styles.pay}>Tpay</Text>
            </View>
          </View>
        </View>

        <View style={styles.paymentOptions}>
          <View style={styles.cardsContainer}>
            <Text style={styles.cardsText}>Credit Card</Text>
          </View>
          <View style={styles.cardsContainer}>
            <Text style={styles.cardsText}>Dedit Card</Text>
          </View>
          <View style={styles.cardsContainer}>
            <Text style={styles.cardsText}>Bank Transfer</Text>
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.skipText}>Skip to properties</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BookYourHome;

const styles = StyleSheet.create({
  bookYourHomeContainer: {
    flex: 1,
  },
  bookYourHomeBackground: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('8.5%'),
  },
  headerText: {
    color: 'white',
    fontSize: hp('4%'),
    marginBottom: hp('1%'),
  },
  priceContainer: {
    flexDirection: 'row',
    marginBottom: hp('1%'),
    justifyContent: 'space-between',
    backgroundColor: 'green',
    width: wp('85%'),
    borderWidth: hp('0.1%'),
    borderColor: '#FFFFFF',
    padding: hp('0.5%'),
    borderRadius: hp('1%'),
  },
  labelText: {
    color: 'white',
    fontSize: hp('2.5%'),
  },
  valueText: {
    color: 'white',
    fontSize: hp('2.5%'),
    marginLeft: wp('1%'),
  },
  paymentMethods: {
    marginBottom: hp('1%'),
  },
  paymentMethodsText: {
    color: 'white',
    fontSize: hp('2.5%'),
    marginBottom: hp('1%'),
    alignSelf: 'flex-start',
    marginLeft: hp('-2.5%'),
  },
  paymentMethodOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paymentOptions: {
    marginBottom: hp('2%'),
  },
  buttonsContainer: {
    alignItems: 'center',
    marginTop: hp('2%'),
    position: 'absolute',
    bottom: hp('4%'),
  },
  continueButton: {
    backgroundColor: '#E84312',
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('5%'),
    borderRadius: hp('1%'),
    marginBottom: hp('2%'),
  },
  continueButtonText: {
    color: 'white',
    fontSize: hp('2%'),
    textAlign: 'center',
    paddingHorizontal: hp('14%'),
  },
  skipText: {
    color: 'white',
    fontSize: hp('2%'),
  },
  payContainer: {
    borderWidth: hp('0.1%'),
    padding: hp('1.5%'),
    borderColor: '#FFFFFF',
    borderRadius: hp('1%'),
    paddingHorizontal: hp('3%'),
    margin: hp('1%'),
  },
  pay: {
    color: '#FFFFFF',
  },
  cardsContainer: {
    borderWidth: hp('0.1%'),
    padding: hp('1.5%'),
    borderColor: '#FFFFFF',
    borderRadius: hp('1%'),
    paddingHorizontal: hp('15%'),
    margin: hp('1%'),
  },
  cardsText: {
    color: '#FFFFFF',
  },
});
