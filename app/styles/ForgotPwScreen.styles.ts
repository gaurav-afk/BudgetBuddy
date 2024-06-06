import * as typography from "../styles/typography";
import { basicColors } from "../styles/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
  scrollView: {
      flex: 1,
      backgroundColor: basicColors.background,
  },
  scrollViewContent: {
    flexGrow: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: basicColors.background,
  },
  container: {
    backgroundColor: basicColors.background,
    maxWidth: 480,
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    marginHorizontal: "auto",
    padding: 21,
    paddingTop: 80,
  },
  title: {
    fontSize: typography.fontSizes.xLarge,
    fontWeight: typography.fontWeights.medium,
    color: basicColors.textPrimary,
  },
  inputContainer: {
    borderRadius: 20,
    backgroundColor: basicColors.backgroundLight,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 48,
    padding: 21,
  },
  iconContainer: {
    marginRight: 20,
  },
  icon: {
    fontSize: typography.fontSizes.xxlarge,
    color: basicColors.primaryLight,
    position: 'relative',
  },
  input: {
    flex: 1,
    color: basicColors.textPrimary,
    fontSize: typography.fontSizes.normal,
  },
  instructions: {
    color: basicColors.primaryLight,
    fontSize: typography.fontSizes.small,
    marginTop: 10,
    marginLeft: 10,
  },
  button: {
    borderRadius: 20,
    backgroundColor: basicColors.primary,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    paddingVertical: 20,
    marginTop: 140,
  },
  buttonText: {
    fontSize: typography.fontSizes.largeMedium,
    fontWeight: typography.fontWeights.bold,
    color: basicColors.textPrimary,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backIcon: {
    fontSize: typography.fontSizes.large,
    color: basicColors.primary,
  },
  backText: {
    color: basicColors.primary,
    fontSize: typography.fontSizes.normal,
    marginLeft: 5,
  },
});