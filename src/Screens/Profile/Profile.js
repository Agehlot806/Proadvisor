import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './Styles'
import Header from '../../Components/Header'
import { COLOR } from '../../utils/Colors'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { images } from '../../utils/Images'
import { EditIcon } from '../../utils/Svg'

const Profile = () => {
  return (
    <View style={styles.maincontainer}>
    <View style={styles.headerView}>
        {/* Header */}
        <Header back={true} backBtnColor={COLOR.WHITE} setting={true} />
        <View style={styles.profileContentView}>
            <Text style={styles.profileHeading}>Profile</Text>
            <View style={styles.profileView}>
                <Image source={images.profile} style={styles.profileImg} />
                <View>
                    <EditIcon />
                </View>
            </View>
        </View>
      </View>
    </View>
  )
}

export default Profile