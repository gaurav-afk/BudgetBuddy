import * as typography from "../styles/typography"
import { basicColors } from "../styles/colors"
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 21,
    justifyContent: 'space-between',
    // backgroundColor: "blue",
  },
  mainContainer: {
    shadowColor: basicColors.textSecondary,
    shadowRadius: 4,
    // elevation: 5, // for Android shadow
    backgroundColor: basicColors.background,
    display: "flex",
    maxWidth: 480,
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    marginHorizontal: "auto",
    // paddingVertical: 120,
  },
  mainImage: {
    alignSelf: "flex-end",
    position: "relative",
    zIndex: 10,
    width: 96,
    marginTop: 22,
    marginRight: 36,
    aspectRatio: 0.75,
  },
  contentContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    paddingHorizontal: 17,
  },
  mainTitle: {
    color: basicColors.textPrimary,
    fontSize: typography.fontSizes.xxLarge,
    fontWeight: typography.fontWeights.xbold,
    fontFamily: typography.fontFamilies.primary,
  },
  subtitle: {
    color: basicColors.textSecondary,
    marginTop: 14,
    fontSize: typography.fontSizes.large,
    fontWeight: typography.fontWeights.medium,
    fontFamily: typography.fontFamilies.primary,
  },
  formContainer: {
    display: "flex",
    marginTop: 10,
    flexDirection: "column",
    alignItems: "stretch",
    fontSize: typography.fontSizes.small,
    color: basicColors.primaryLight,
    fontWeight: typography.fontWeights.regular,
  },
  forgotPassword: {
    color: basicColors.primary,
    fontFamily: typography.fontFamilies.primary,
    alignSelf: "flex-end",
    marginRight: 23,
    marginTop: 32,
  },
  signInButton: {
    borderRadius: 20,
    backgroundColor: basicColors.primary,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    paddingVertical: 20,
    marginTop: 25,
  },
  buttonText: {
    color: basicColors.textPrimary,
    fontSize: typography.fontSizes.largeMedium,
    fontWeight: typography.fontWeights.bold,
    fontFamily: typography.fontFamilies.primary,
  },
  newUserContainer: {
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
    gap: 6,
  },
  newUserText: {
    color: basicColors.textPrimary,
    fontSize: typography.fontSizes.normal,
    fontWeight: typography.fontWeights.regular,
    fontFamily: typography.fontFamilies.primary,
  },
  createAccountText: {
    color: basicColors.primary,
    fontSize: typography.fontSizes.normal,
    fontWeight: typography.fontWeights.regular,
    fontFamily: typography.fontFamilies.primary,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  scrollView: {
    backgroundColor: basicColors.background,
  },
  fieldIcon: {
    position: 'relative',
  },
});
