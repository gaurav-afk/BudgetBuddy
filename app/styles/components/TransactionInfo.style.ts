import { basicColors } from "../colors"
import * as typography from "../typography"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
infoContainer: {
    width: "48%",
    fontFamily: typography.fontFamilies.primary,
    borderRadius: 20,
    backgroundColor: basicColors.backgroundLight,
    paddingHorizontal: 20,
    paddingVertical: 17,
    justifyContent: "center",
  },
  textInput: {
    fontFamily: typography.fontFamilies.primary,
    fontSize: typography.fontSizes.normal,
    color: basicColors.textPrimary,
    textAlign: "center",
  },
});