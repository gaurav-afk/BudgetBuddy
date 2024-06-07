import { StyleSheet } from "react-native";
import { basicColors } from "../colors";
import typography from "../typography";

export default StyleSheet.create({
    cashFlowContainer: {
        width: "40%",
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        marginTop: 30,
        backgroundColor: "#272727",
    },
    amount: {
        fontSize: typography.fontSizes.smallLarge,
        fontWeight: typography.fontWeights.bold,
    },
    InAndExIcon: {
        paddingBottom: 5,
    },
    InAndExText: {
        color: basicColors.textSecondary,
        fontSize: typography.fontSizes.normal,
    },
});
