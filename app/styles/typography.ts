import { TextStyle } from 'react-native';

export const fontFamilies: { [key: string]: TextStyle["fontFamily"] } = {
    primary: 'Inter, sans-serif',
    // secondary: 'Arial, sans-serif',
};

export const fontSizes: { [key: string]: TextStyle["fontSize"] } = {
    small: 12,
    normal: 15,
    medium: 16,
    largeMedium: 18,
    smallLarge: 20,
    large: 24,
    xLarge: 32,
    xxLarge: 40,
};

export const fontWeights: { [key: string]: TextStyle["fontWeight"] } = {
    regular: '400',
    medium: '500',
    bold: '700',
    xbold: '800',
};


export const lineHeights: { [key: string]: TextStyle["lineHeight"] } = {
    small: 1.2,
    normal: 1.5,
    medium: 1.75,
    large: 2,
};
  

export const typography: { [key: string]: TextStyle } = {
    h1: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes.xLarge,
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.large,
    },
    h2: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes.large,
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.medium,
    },
    body: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes.normal,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.normal,
    },
    caption: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes.small,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.small,
    },
};

export default {
    fontFamilies,
    fontSizes,
    fontWeights,
    lineHeights,
    typography,
};
  