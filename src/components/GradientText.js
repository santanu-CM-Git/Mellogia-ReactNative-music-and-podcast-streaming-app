import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { rf } from '../utils/responsive';

const GradientText = ({ children, colors, style, ...props }) => {
  const gradientColors = colors || ['#9333EA', '#EC4899'];
  const defaultFontSize = rf(3.5);
  const fontSize = style?.fontSize || defaultFontSize;
  const fontFamily = style?.fontFamily || 'Poppins-Bold';
  
  return (
    <MaskedView
      style={styles.container}
      maskElement={
        <Text style={[{ fontSize, fontFamily }, style]} {...props}>
          {children}
        </Text>
      }>
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}>
        <Text style={[{ fontSize, fontFamily, opacity: 0 }, style]} {...props}>
          {children}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexShrink: 0,
  },
  gradient: {
    flexShrink: 0,
  },
});

export default GradientText;

