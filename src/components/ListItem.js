import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { wp, hp, rf, moderateScale, screenWidth } from '../utils/responsive';

export default function ListItem({photo, title, subTitle, buttonType, price, onPress}) {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          source={photo}
          style={styles.image}
          resizeMode='contain'
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            {title}
          </Text>
          <Text
            numberOfLines={1}
            style={styles.price}>
            {price}
          </Text>
        </View>
      </View>

      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>
          {buttonType == 'buy' && 'Buy'}
          {buttonType == 'remove' && 'Remove'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(2.5),
  },
  contentContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    flex: 1
  },
  image: {
    width: moderateScale(60), 
    height: moderateScale(60), 
    borderRadius: moderateScale(10), 
    marginRight: wp(2)
  },
  textContainer: {
    width: screenWidth - moderateScale(220)
  },
  title: {
    color: '#333',
    fontFamily: 'Outfit-Medium',
    fontSize: rf(1.75),
  },
  price: {
    color: '#333',
    fontFamily: 'Outfit-Medium',
    fontSize: rf(1.75),
    textTransform: 'uppercase',
  },
  button: {
    backgroundColor:'#0aada8',
    padding: hp(1.2),
    width: wp(20),
    borderRadius: moderateScale(10),
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Outfit-Medium',
    fontSize: rf(1.75),
  },
});
