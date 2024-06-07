import { StyleSheet } from "react-native";
import * as typography from "../typography"
import { basicColors } from "../colors"

export default StyleSheet.create({
    imageContainer: {
        width: "20%",
        alignItems: "center",
        backgroundColor: basicColors.primaryLight,
        borderRadius: 20,
        // paddingVertical: 5
        // padding: 10
    },
    imageTextSection: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    image: {
        paddingTop: 10,
        color: basicColors.textPrimary,
    },
    textView: {
        fontFamily: typography.fontFamilies.primary,
        fontSize: typography.fontSizes.small,
        color: basicColors.textPrimary,
        textAlign: "center",
        marginBottom: 10,
      },

});