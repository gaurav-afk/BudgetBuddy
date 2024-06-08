import { basicColors } from "../colors"
import * as typography from "../typography"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
infoContainer: {
    width: "47%",
    fontFamily: typography.fontFamilies.primary,
    borderRadius: 20,
    backgroundColor: basicColors.backgroundLight,
    paddingVertical: 10,
    justifyContent: "center",
  },
  textInput: {
    fontFamily: typography.fontFamilies.primary,
    fontSize: typography.fontSizes.normal,
    color: basicColors.textPrimary,
    textAlign: "center",
  },
});
