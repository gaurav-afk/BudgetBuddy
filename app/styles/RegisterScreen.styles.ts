import * as typography from "../styles/typography"
import { basicColors } from "../styles/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    scrollView: {
      backgroundColor: basicColors.background,
      flex: 1,
    },
    scrollViewContent: {
      flexGrow: 1,
      paddingTop: 20,
      alignItems: 'center',
    },
    container: {
      backgroundColor: basicColors.background,
      display: "flex",
      maxWidth: 480,
      width: "100%",
      flexDirection: "column",
      alignItems: "stretch",
      marginHorizontal: 'auto',
      paddingVertical: 80,
    },
    form: {
      display: "flex",
      width: "100%",
      flexDirection: "column",
      alignItems: "stretch",
      paddingHorizontal: 20,
    },
    heading: {
      paddingBottom: 20,
      color: basicColors.textPrimary,
      fontSize: typography.fontSizes.xLarge,
      fontWeight: typography.fontWeights.medium,
      fontFamily: typography.fontFamilies.primary,
    },
    loginText: {
      color: basicColors.primary,
      fontFamily: typography.fontFamilies.primary,
      alignSelf: "flex-end",
      marginTop: 36,
    },
    registerButton: {
      borderRadius: 20,
      backgroundColor: basicColors.primary,
      alignItems: "center",
      justifyContent: "center",
      padding: 15,
      paddingVertical: 20,
      marginTop: 40,
    },
    registerButtonText: {
      color: basicColors.textPrimary,
      fontSize: typography.fontSizes.largeMedium,
      fontWeight: typography.fontWeights.bold,
      fontFamily: typography.fontFamilies.primary,
    },
    fieldIcon: {
      position: 'relative',
    },
});
