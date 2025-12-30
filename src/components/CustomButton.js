import { Text, TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { chatImg, forwordImg } from '../utils/Images';
import { wp, hp, rf, moderateScale } from '../utils/responsive';

export default function CustomButton({ label, onPress, buttonIcon, buttonColor, disabled, style, gradientColors, customIcon, children, leftIcon }) {
  const getButtonStyle = () => {
    if (disabled) {
      return styles.buttonViewDisabled;
    }
    if (buttonColor == 'red') return styles.buttonViewRed;
    if (buttonColor === 'delete') return styles.buttonViewDelete;
    if (buttonColor == 'gray') return styles.buttonViewGray;
    if (buttonColor == 'small') return styles.buttonViewSmall;
    if (buttonColor == 'gradient') return styles.buttonViewGradient;
    return styles.buttonView;
  };

  const getTextStyle = () => {
    if (disabled) {
      return styles.buttonTextDisabled;
    }
    if (buttonColor == 'red') return styles.buttonTextRed;
    if (buttonColor === 'delete') return styles.buttonTextDelete;
    if (buttonColor == 'gray') return styles.buttonTextGray;
    return styles.buttonText;
  };

  // If gradient is specified, wrap in LinearGradient
  if (buttonColor === 'gradient' && gradientColors && !disabled) {
    return (
      <View style={[styles.gradientWrapper, style]}>
        <LinearGradient
          colors={gradientColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientContainer}>
          <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            activeOpacity={disabled ? 1 : 0.7}
            style={styles.gradientButtonInner}>
            {leftIcon && <View style={styles.leftIconContainer}>{leftIcon}</View>}
            {customIcon && <View style={styles.customIconContainer}>{customIcon}</View>}
            {children || <Text style={getTextStyle()}>{label}</Text>}
            {buttonIcon ? <Image source={forwordImg} style={styles.iconImage} tintColor="#FFF" /> : null}
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[getButtonStyle(), style]}
      activeOpacity={disabled ? 1 : 0.7}>
      {leftIcon && <View style={styles.leftIconContainer}>{leftIcon}</View>}
      {customIcon && <View style={styles.customIconContainer}>{customIcon}</View>}
      {children || <Text style={getTextStyle()}>{label}</Text>}
      {buttonIcon ? <Image source={forwordImg} style={styles.iconImage} tintColor={disabled ? '#999999' : (buttonColor === 'gray' ? '#000' : '#FFF')} /> : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonView: {
    backgroundColor: '#FF455C',
    borderColor: '#FF455C',
    borderWidth: moderateScale(1),
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(4),
    borderRadius: moderateScale(25),
    marginBottom: hp(2.5),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: hp(6),
  },
  buttonViewSmall: {
    backgroundColor: '#EEF8FF',
    borderColor: '#417AA4',
    borderWidth: moderateScale(1),
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(4),
    borderRadius: moderateScale(25),
    marginBottom: hp(2.5),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: hp(6),
  },
  buttonViewRed: {
    backgroundColor: '#FFF',
    borderColor: '#E3E3E3',
    borderWidth: moderateScale(1),
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(4),
    borderRadius: moderateScale(25),
    marginBottom: hp(2.5),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: hp(6),
  },
  buttonViewGray: {
    backgroundColor: '#FFF',
    borderColor: 'transparent',
    borderWidth: 0,
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(4),
    borderRadius: moderateScale(25),
    marginBottom: hp(3),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: hp(6),
  },
  buttonViewDelete: {
    backgroundColor: '#FFF',
    borderColor: '#E1293B',
    borderWidth: moderateScale(1),
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(4),
    borderRadius: moderateScale(25),
    marginBottom: hp(2.5),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: hp(6),
  },
  buttonViewDisabled: {
    backgroundColor: '#E0E0E0',
    borderColor: '#E0E0E0',
    borderWidth: moderateScale(1),
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(4),
    borderRadius: moderateScale(25),
    marginBottom: hp(2.5),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.6,
    minHeight: hp(6),
  },
  buttonViewGradient: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(4),
    borderRadius: moderateScale(25),
    marginBottom: hp(2.5),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: hp(6),
  },
  gradientWrapper: {
    borderRadius: moderateScale(25),
    overflow: 'hidden',
    marginBottom: hp(2.5),
  },
  gradientContainer: {
    borderRadius: moderateScale(25),
  },
  gradientButtonInner: {
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(4),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: hp(6),
  },
  buttonText: {
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: rf(2),
    color: '#FFFFFF',
  },
  buttonTextRed: {
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: rf(2),
    color: '#2D2D2D',
  },
  buttonTextDelete: {
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: rf(2),
    color: '#E1293B',
  },
  buttonTextDisabled: {
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: rf(2),
    color: '#999999',
  },
  buttonTextGray: {
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: rf(2),
    color: '#000',
  },
  iconImage: {
    width: moderateScale(23),
    height: moderateScale(23),
    marginLeft: wp(1.2)
  },
  customIconContainer: {
    marginRight: wp(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftIconContainer: {
    marginRight: wp(3),
    justifyContent: 'center',
    alignItems: 'center',
  }
})
