import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
  responsiveScreenWidth,
  responsiveScreenHeight,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

// Base dimensions (iPhone 14 Pro - 393x852)
const BASE_WIDTH = 393;
const BASE_HEIGHT = 852;

// Responsive width (percentage of screen width)
export const wp = (percentage) => {
  return responsiveWidth(percentage);
};

// Responsive height (percentage of screen height)
export const hp = (percentage) => {
  return responsiveHeight(percentage);
};

// Responsive font size
export const rf = (size) => {
  return responsiveFontSize(size);
};

// Responsive screen width (percentage of screen width)
export const rsw = (percentage) => {
  return responsiveScreenWidth(percentage);
};

// Responsive screen height (percentage of screen height)
export const rsh = (percentage) => {
  return responsiveScreenHeight(percentage);
};

// Responsive screen font size
export const rsf = (size) => {
  return responsiveScreenFontSize(size);
};

// Scale based on width
export const scale = (size) => {
  return (width / BASE_WIDTH) * size;
};

// Vertical scale based on height
export const verticalScale = (size) => {
  return (height / BASE_HEIGHT) * size;
};

// Moderate scale (combines both width and height scaling)
export const moderateScale = (size, factor = 0.5) => {
  return size + (scale(size) - size) * factor;
};

// Get screen dimensions
export const screenWidth = width;
export const screenHeight = height;

// Check if device is tablet
export const isTablet = () => {
  return width >= 768;
};

// Check if device is small screen
export const isSmallScreen = () => {
  return width < 375;
};

// Check if device is large screen
export const isLargeScreen = () => {
  return width >= 414;
};

export default {
  wp,
  hp,
  rf,
  rsw,
  rsh,
  rsf,
  scale,
  verticalScale,
  moderateScale,
  screenWidth,
  screenHeight,
  isTablet,
  isSmallScreen,
  isLargeScreen,
};

