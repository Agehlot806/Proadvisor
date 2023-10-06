import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import styles from './HomeStyle';
import Header from '../../Components/Header';
import {COLOR} from '../../utils/Colors';
import {images} from '../../utils/Images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PropertyBox from '../../Components/PropertyBox';
import Carousel from 'react-native-reanimated-carousel';
import {Picker} from '@react-native-picker/picker';
import {Fav, Location, PhoneIcon, WhatsappIcon} from '../../utils/Svg';

const Categoray = [
  {id: 1, title: 'Residential'},
  {id: 2, title: 'Commercial'},
  {id: 3, title: 'Send Request'},
];

const Home = ({navigation}) => {
  const [selectedCat, setSelectedCat] = useState(1);
  const [selectedId, setSelectedId] = useState(0);
  const width = Dimensions.get('window').width;
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [...new Array(3).keys()];

  const renderDots = () => {
    return data.map((item, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.dot,
          {backgroundColor: index === currentIndex ? 'red' : 'gray'},
        ]}
        onPress={() => handleDotPress(index)}
      />
    ));
  };
  return (
    <View style={styles.mainContainer}>
      {/* Header */}
      <Header
        title={'ProAdvisor'}
        menu={true}
        profile={true}
        search={true}
        statusbarColor={COLOR.PRIMERYCOLOR}
        onPressProfile={() => navigation.navigate('Profile')}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Banner Slider */}
        <View
          style={{
            alignSelf: 'center',
            marginTop: hp('2%'),
          }}>
          <Carousel
            loop
            width={width}
            height={width / 2.2}
            autoPlay={true}
            data={[...new Array(6).keys()]}
            scrollAnimationDuration={1000}
            onSnapToItem={index => console.log('current index:', index)}
            renderItem={({index}) => (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                }}>
                <Image source={images.propertyDetail} />
              </View>
            )}
          />
        </View>
        {/* Location search */}
        <View style={styles.locationWrapper}>
          <View style={styles.loationInputWrapper}>
            <Picker
              mode="dropdown"
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }>
              <Picker.Item label="Select City" value="0" />
              <Picker.Item label="Panvel" value="Panvel" />
              <Picker.Item label="Thana" value="Thana" />
              <Picker.Item label="Mumbai" value="Mumbai" />
              <Picker.Item label="Bhiwandi" value="Bhiwandi" />
            </Picker>
          </View>
        </View>
        {/* Categoray  */}
        <View style={styles.categoryWrapper}>
          <View style={styles.categoryView}>
            {Categoray &&
              Categoray.map(item => (
                <TouchableOpacity
                  key={item.id}
                  style={[
                    styles.categoryBlock,
                    {
                      backgroundColor:
                        selectedCat === item.id ? COLOR.WHITE : 'transparent',
                    },
                  ]}
                  onPress={() => setSelectedCat(item.id)}>
                  <Text
                    style={[
                      styles.categoryTxt,
                      {
                        color:
                          selectedCat === item.id
                            ? COLOR.THEAMCOLOR
                            : COLOR.GRAY,
                      },
                    ]}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              ))}
          </View>
          {/* Radio */}
          <View
            style={[
              styles.rowContainer,
              {justifyContent: 'space-between', marginTop: hp('3%')},
            ]}>
            <View style={styles.rowContainer}>
              <TouchableOpacity
                onPress={() => setSelectedId(selectedId === 1 ? 0 : 1)}
                style={styles.radioButton}>
                {selectedId === 1 ? <View style={styles.radioDot} /> : null}
              </TouchableOpacity>
              <Text
                style={[
                  styles.categoryTxt,
                  {color: COLOR.WHITE, marginLeft: hp('2%')},
                ]}>
                Ready to Move
              </Text>
            </View>
            <View style={styles.rowContainer}>
              <TouchableOpacity
                onPress={() => setSelectedId(selectedId === 2 ? 0 : 2)}
                style={styles.radioButton}>
                {selectedId === 2 ? <View style={styles.radioDot} /> : null}
              </TouchableOpacity>
              <Text
                style={[
                  styles.categoryTxt,
                  {color: COLOR.WHITE, marginLeft: hp('2%')},
                ]}>
                Under Construction
              </Text>
            </View>
          </View>
          {/* Show result Button */}
          <TouchableOpacity style={styles.resultBtn}>
            <Text style={styles.resultBtnTXt}>Show 1109 results</Text>
          </TouchableOpacity>
        </View>
        {/* Recent View Property */}
        <View style={styles.propertyWrapper}>
          <View style={styles.propertyHeadingView}>
            <Text style={styles.propertyHeadingTxt}>Properties</Text>
            <TouchableOpacity>
              <Text style={[styles.locationInput, {marginBottom: hp('1%')}]}>
                See all
              </Text>
            </TouchableOpacity>
          </View>
          {/* Property Box */}
          <View style={styles.propertyBoxWrpper}>
            <Carousel
              loop
              width={width * 0.9}
              height={width / 1.3}
              autoPlay={true}
              data={data}
              scrollAnimationDuration={1000}
              onSnapToItem={index => setCurrentIndex(index)}
              renderItem={({index}) => (
                <>
                  <TouchableOpacity style={styles.propertySliderBox}>
                    <Image
                      source={images.propertyDetail}
                      style={styles.propertySliderImg}
                    />
                    <View
                      style={[
                        styles.rowContainer,
                        {
                          position: 'absolute',
                          top: hp('2%'),
                          justifyContent: 'space-between',
                          width: '100%',
                          paddingRight: hp('1%'),
                        },
                      ]}>
                      <View style={styles.featurdBox}>
                        <Text style={styles.featuredTxt}>Featured</Text>
                      </View>
                      <TouchableOpacity>
                        <Fav width={wp('7%')} height={hp('5%')} />
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.propertySliderTxt}>
                      1RK | 1BHK kedardhar
                    </Text>
                    <Text style={styles.propertySliderTxt}>
                      kedardhar is under it to make a type specimen book. It has
                      survived not only five centuries, but also the leap into
                      electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of
                      Letraset sheets...
                    </Text>
                  </TouchableOpacity>
                </>
              )}
            />
            <View style={styles.indicatorContainer}>{renderDots()}</View>
          </View>
          {/* Propert box's */}
          <FlatList
          data={[1,2,3,4]}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.propertyBox}>
            <View style={{width: '33%'}}>
              <Image source={images.property1} style={styles.propertyBoxImg} />
            </View>
            <View
              style={{
                width: '65%',
                paddingHorizontal: hp('1%'),
              }}>
              <View
                style={[
                  styles.rowContainer,
                  {justifyContent: 'space-between'},
                ]}>
                <Text style={styles.propertyName}>Raghunath</Text>
                <View style={[styles.rowContainer, {gap: hp('2%')}]}>
                  <WhatsappIcon width={wp('5%')} height={wp('6%')} />
                  <View style={styles.phoneCallView}>
                    <PhoneIcon width={wp('4%')} height={wp('3%')} />
                  </View>
                </View>
              </View>
              {/* Location */}
              <View style={styles.rowContainer}>
                <Location width={wp('3%')} height={hp('2%')} />
                <Text style={[styles.propertySmallTxt, {marginLeft: hp('1%')}]}>
                  Kamothe, Navi mumbai
                </Text>
              </View>
              {/* Deal and status */}
              <View style={[styles.rowContainer, {marginVertical: hp('1%'),}]}>
                <View style={styles.stausBox}>
                  <Text style={[styles.propertySmallTxt, {fontWeight: 'bold'}]}>
                    BEST DEAL
                  </Text>
                </View>
                <View
                  style={[
                    styles.stausBox,
                    {backgroundColor: 'green', marginLeft: hp('3%')},
                  ]}>
                  <Text
                    style={[
                      styles.propertySmallTxt,
                      {fontWeight: 'bold', color: COLOR.BLACK},
                    ]}>
                    Verified
                  </Text>
                </View>
              </View>
              {/* deatils */}
              <Text style={[styles.propertySmallTxt,{color: COLOR.GRAY, }]}>1BHK, 2BHK Apartments</Text>
              <Text style={[styles.propertySmallTxt,{color: COLOR.GRAY }]}>10min from Distance from Station</Text>
              <View style={[styles.rowContainer,{justifyContent: 'space-between',marginTop: hp('1%')}]}>
                <Text style={[styles.propertySmallTxt,{fontWeight: 'bold', fontSize: hp('2%')}]}>₹50L - 35L</Text>
                <Text style={[styles.propertySmallTxt,{fontWeight: 'bold', fontSize: hp('2%')}]}>480 - 610 sqFt</Text>
              </View>
            </View>
          </TouchableOpacity>
          )}
           />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
