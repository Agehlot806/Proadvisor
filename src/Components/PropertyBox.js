import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {images} from '../utils/Images';
import {COLOR} from '../utils/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const propertys = [
  {
    id: 1,
    image: images.property1,
    name: '1 RK | 1 BHK | 2 BHK',
    location: 'New Panvel',
  },
  {
    id: 2,
    image: images.property2,
    name: '1 RK | 1 BHK | 2 BHK',
    location: 'New Panvel',
  },
  {
    id: 3,
    image: images.property3,
    name: '1 RK | 1 BHK | 2 BHK',
    location: 'New Panvel',
  },
  {
    id: 4,
    image: images.property4,
    name: '1 RK | 1 BHK | 2 BHK',
    location: 'New Panvel',
  },
];
const PropertyBox = (props) => {
  return (
    <FlatList
      data={propertys}
      numColumns={2}
      columnWrapperStyle={{
        columnGap: hp('3%'),
      }}
      contentContainerStyle={styles.flatListContainer} // Add this line
      renderItem={({item}) => {
        return (
          <TouchableOpacity style={styles.propertyBox} onPress={() => props.handleOnpress()}>
            <Image source={item.image} style={styles.propertyImg} />
            <Text
              style={[
                styles.locationHeading,
                {color: COLOR.WHITE, marginTop: hp('2%')},
              ]}>
              {item.name}
            </Text>
            <Text style={[styles.locationHeading, {color: COLOR.WHITE}]}>
              {item.location}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default PropertyBox;

const styles = StyleSheet.create({
  flatListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  propertyBox: {
    width: wp('42%'),
    marginBottom: hp('3%'),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    // marginRight: hp('2%'),
    overflow: 'hidden',
  },
  propertyImg: {
    width: '100%',
    height: hp('30%'),
    borderRadius: hp('2%'),
    resizeMode: 'cover',
    overflow: 'hidden',
  },
  locationHeading: {
    color: COLOR.GRAY,
    fontSize: hp('2%'),
    fontWeight: '700',
  },
});
