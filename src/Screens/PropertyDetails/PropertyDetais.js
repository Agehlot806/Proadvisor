import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './Styles';
import {images} from '../../utils/Images';
import Header from '../../Components/Header';
import {AreaIcon, BadroomIcon, Location} from '../../utils/Svg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLOR} from '../../utils/Colors';

const PropertyDetais = ({navigation}) => {
  return (
    <ScrollView style={styles.maincontainer}>
      {/* Header and image */}
      <View>
        <Image source={images.propertyDetail} style={styles.propertyImg} />
        <View style={styles.headerView}>
          <Header
            back={true}
            fav={true}
            statusbarColor={'transparent'}
            translucent={true}
            handleBackPress={() => navigation.goBack()}
          />
        </View>
      </View>
      {/* Name, location and description */}
      <View style={styles.contentWrappr}>
        <Text style={styles.propertyTitleTxt}>1 RK | 1 BHK | 2 BHK </Text>
        <View style={styles.locationView}>
          <Location width={wp('4%')} height={hp('3%')} />
          <Text style={styles.propertyLocationTxt}>New Panvel</Text>
        </View>
        <Text style={[styles.descriptionTxt, {marginTop: hp('2%')}]}>
          Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
          condimentum ac, vestibulum eu nisl.
          <Text style={[styles.descriptionTxt, {color: COLOR.THEAMCOLOR}]}>
            {' '}
            See More
          </Text>
        </Text>

        <View style={styles.BorderView} />
      </View>
      {/* Features */}
      <View style={styles.featureWrapper}>
        <View style={styles.featureHeaddingView}>
          <Text style={styles.featureTxt}>Features</Text>
          <Text style={styles.seeallTxt}>See all</Text>
        </View>
        <View style={styles.featureContentWrapper}>
          <View style={[styles.rowContainer,{justifyContent: 'space-between'}]}>
            <View style={styles.rowContainer}>
              <AreaIcon width={wp('5%')} height={hp('3%')} />
              <Text style={[styles.cotentTxt,{marginLeft: hp('1%')}]}>Area</Text>
            </View>
            <Text style={styles.cotentTxt}>580 ft</Text>
          </View>
          <View style={[styles.rowContainer,{justifyContent: 'space-between'}]}>
            <View style={styles.rowContainer}>
              <BadroomIcon width={wp('5%')} height={hp('3%')} />
              <Text style={[styles.cotentTxt,{marginLeft: hp('1%')}]}>Bedrooms</Text>
            </View>
            <Text style={styles.cotentTxt}>2 Bedrooms</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PropertyDetais;
