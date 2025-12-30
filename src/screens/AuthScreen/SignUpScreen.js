import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import { loginBanner, logoIcon, googleIcon } from '../../utils/Images';
import CustomButton from '../../components/CustomButton';
import { wp, hp, rf, moderateScale } from '../../utils/responsive';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleContinue = () => {
    // Navigate to next screen or handle sign up
    console.log('Continue with email:', email);
  };

  const handleGoogleSignUp = () => {
    // Handle Google sign up
    console.log('Sign up with Google');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {/* Login Banner Background */}
        <View style={styles.bannerContainer}>
          <Image
            source={loginBanner}
            style={styles.bannerImage}
            resizeMode="cover"
          />
          <View style={styles.darkOverlay} />
        </View>

        {/* Logo Section */}
        <View style={styles.logoSection}>
          <Image
            source={logoIcon}
            style={styles.logoImage}
            resizeMode="contain"
          />

          <Text style={styles.heading}>
            Sign up to <Text style={styles.gradientText}>start listening</Text>
          </Text>
        </View>

        {/* Form Section */}
        <View style={styles.formSection}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="abc@gmail.com"
              placeholderTextColor="#666"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <CustomButton
            label="Continue"
            onPress={handleContinue}
            buttonColor="gradient"
            gradientColors={['#9333EA', '#EC4899']}
          />

          <View style={styles.separator}>
            <Text style={styles.separatorText}>or</Text>
          </View>

          <CustomButton
            label="Sign up with Google"
            onPress={handleGoogleSignUp}
            buttonColor="gray"
            leftIcon={<Image source={googleIcon} style={styles.googleIconImage} resizeMode="contain" />}
            style={styles.googleButton}
          />

          <View style={styles.legalText}>
            <Text style={styles.legalTextContent}>
              By proceeding, you agree to our{' '}
              <Text style={styles.linkText}>Privacy Policy</Text> and{' '}
              <Text style={styles.linkText}>Terms of Service</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContent: {
    flexGrow: 1,
  },
  bannerContainer: {
    height: hp(35),
    position: 'relative',
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  darkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  logoSection: {
    alignItems: 'center',
    paddingTop: hp(2.5),
    paddingBottom: hp(3.5),
  },
  logoImage: {
    width: wp(50),
    height: hp(6),
    marginBottom: hp(2.5),
  },
  heading: {
    fontSize: rf(3.5),
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  gradientText: {
    fontFamily: 'Poppins-Bold',
    color: '#EC4899', // Using the gradient end color as a solid color
  },
  formSection: {
    paddingHorizontal: wp(6),
    paddingBottom: hp(5),
  },
  inputContainer: {
    marginBottom: hp(3),
  },
  inputLabel: {
    color: '#FFF',
    fontSize: rf(1.75),
    marginBottom: hp(1),
    fontFamily: 'Poppins-Medium',
  },
  input: {
    backgroundColor: '#1a1a1a',
    borderRadius: moderateScale(12),
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(4),
    color: '#FFF',
    fontSize: rf(2),
    fontFamily: 'Poppins-Regular',
    borderWidth: 0,
    height: hp(6),
  },
  separator: {
    alignItems: 'center',
    marginVertical: hp(0.6),
    marginTop: hp(-1.2),
  },
  separatorText: {
    color: '#FFF',
    fontSize: rf(1.75),
    fontFamily: 'Poppins-Regular',
  },
  googleButton: {
    marginBottom: hp(3),
  },
  googleIconImage: {
    width: moderateScale(24),
    height: moderateScale(24),
  },
  legalText: {
    alignItems: 'center',
    paddingHorizontal: wp(5),
  },
  legalTextContent: {
    color: '#999',
    fontSize: rf(1.5),
    textAlign: 'center',
    lineHeight: rf(2.25),
    fontFamily: 'Poppins-Regular',
  },
  linkText: {
    color: '#FFF',
    textDecorationLine: 'underline',
  },
});

export default SignUpScreen;

