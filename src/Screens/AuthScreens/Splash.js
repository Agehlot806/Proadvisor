import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {images} from '../../utils/Images';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SplashLogo, SplashLoader} from '../../utils/Svg';

const Splash = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('GetStart');
      }}
      style={styles.containerSplash}>
      <Image source={images.SplashBackground} style={styles.imageSplash} />
      <SplashLogo width={wp('35%')} height={hp('15%')} />
      <SplashLoader width={wp('55%')} height={hp('4%')} />
    </TouchableOpacity>
  );
};

export default Splash;

const styles = StyleSheet.create({
  containerSplash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSplash: {
    width: wp('100%'),
    height: hp('100%'),
    resizeMode: 'cover',
    position: 'absolute',
  },
});
