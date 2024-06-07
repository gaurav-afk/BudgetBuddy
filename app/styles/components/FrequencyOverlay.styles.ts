import { StyleSheet } from "react-native";
import { basicColors } from "../colors";
import typography from "../typography";

export default StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 20,
      maxWidth: 372,
      alignItems: 'stretch',
    },
    header: {
      alignSelf: 'center',
      marginTop: 42,
    },
    headerText: {
      fontFamily: typography.fontFamilies.primary,
      fontSize: 15,
      color: basicColors.primary,
      fontWeight: '500',
      textTransform: 'capitalize',
    },
    advancedOptions: {
      backgroundColor: 'rgba(51, 51, 51, 1)',
      borderRadius: 25,
      padding: 12,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      marginVertical: 20,
    },
    advancedOptionsText: {
      fontFamily: typography.fontFamilies.primary,
       color: basicColors.textPrimary,
    },
    blockRow:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    block: {
      alignSelf: 'center',
      marginTop: 25,
    },
    blockText: {
      fontFamily: typography.fontFamilies.primary,
      color: basicColors.textPrimary,
    },
    selectedTab: {
        backgroundColor: basicColors.primaryLight,
        padding: 6,
        borderRadius: 5,
      },
    selectedTabText: {
         color: basicColors.primary,
      },
    divider: {
      backgroundColor: '#D9D9D9',
      height: 1,
      marginVertical: 16,
    },
    repaymentSummary: {
      marginVertical: 16,
    },
    summaryLabels: {
      flexDirection: 'column',
      alignItems: 'stretch',
    },
    infoBlock: {
      marginBottom: 14,
      flexDirection: 'row',

    },
    textLabel: {
      fontFamily: typography.fontFamilies.primary,
      fontSize: typography.fontSizes.normal,
      color: basicColors.textPrimary,
      padding: 8,
      marginEnd: 20,
    },
    textValue: {
      fontFamily: typography.fontFamilies.primary,
      fontWeight: typography.fontWeights.normal,
      color: basicColors.textPrimary,
      padding: 8,
      borderRadius: 5,
      flex: 1,  
      textAlign: "right",
    },
    pickerContainer: {
        flex: 0.6, 
        backgroundColor: '#3A3A3A', 
        borderRadius: 5, 
      },
      picker: {
        height: 40, 
        color: basicColors.textPrimary, 
      },
    actionButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 193,
      maxWidth: 343,
      width: '100%',
    },
    cancelButton: {
      backgroundColor: '#6D0202',
      borderRadius: 20,
      paddingVertical: 17,
      paddingHorizontal: 48,
    },
    okButton: {
      backgroundColor: '#54A652',
      borderRadius: 20,
      paddingVertical: 17,
      paddingHorizontal: 60,
    },
    buttonText: {
      fontFamily: typography.fontFamilies.primary,
       color: basicColors.textPrimary,
      fontWeight: '500',
    },
  });