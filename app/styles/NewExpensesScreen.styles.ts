import { StyleSheet } from "react-native";
import * as typography from "./typography"
import colors, { basicColors } from "./colors"

export default StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: basicColors.background,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: basicColors.background,
  },
    container: {
        backgroundColor: basicColors.background,
        display: "flex",
        maxWidth: 480,
        width: "100%",
        paddingTop: 80,
        flexDirection: "column",
        alignItems: "stretch",
        marginHorizontal: "auto",
        paddingHorizontal: 16,
      },
      headerContainer: {
        zIndex: 10,
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "stretch",
        paddingHorizontal: 11,
      },
      header: {
      },
      headerText: {
        fontFamily: typography.fontFamilies.primary,
        fontSize: typography.fontSizes.xLarge,
        fontWeight: typography.fontWeights.bold,
        lineHeight: typography.lineHeights.xLarge,
        color: basicColors.textPrimary,
        textAlign: "left",
      },
      imageSectionsContainer: {
        display: "flex",
        marginTop: 32,
        alignItems: "flex-start",
        gap: 19,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
      },
      purchaseDetailsContainer: {
        display: "flex",
        flexDirection: "row",
        marginTop: 37,
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
    },
    productImage: {
        borderRadius: 25,
        backgroundColor: basicColors.backgroundLighter,
        width: 118,
        height: 109,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    scanIcon: {
        color: basicColors.iconLight,
    },
    priceDetailsContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      justifyContent: "center",
      flex: 1,
  },
  currencyPriceRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  currencyContainer: {
    width: 70,
    borderRadius: 20,
    backgroundColor: basicColors.backgroundLight,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
  },
  currencyText: {
      fontFamily: typography.fontFamilies.primary,
      color: 'green',
      fontWeight: typography.fontWeights.bold,
      fontSize: typography.fontSizes.small,
      textAlign: "center",      
  },
  priceContainer: {
      borderRadius: 20,
      backgroundColor: basicColors.backgroundLight,
      paddingHorizontal: 12,
      paddingVertical: 6,
      flex: 1,
    },
  nameContainer: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: basicColors.backgroundLight,
    paddingHorizontal: 12,
    justifyContent: "center",
    marginBottom: 8,
},
  detailsGridContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 24,
    gap: 20,
},
detailsRow: {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: 20,
},
timeContainer: {
  width: "47%",
  fontFamily: typography.fontFamilies.primary,
  borderRadius: 20,
  backgroundColor: basicColors.backgroundLight,
  paddingHorizontal: 20,
  paddingVertical: 10,
  justifyContent: "center",
  alignItems: "center",
},
timeText: {
  fontFamily: typography.fontFamilies.primary,
  fontSize: typography.fontSizes.small,
  color: basicColors.textPrimary,
},
frequencyContainer: {
  width: "47%",
  fontFamily: typography.fontFamilies.primary,
  borderRadius: 20,
  backgroundColor: basicColors.backgroundLight,
  paddingHorizontal: 20,
  paddingVertical: 10,
  justifyContent: "center",
  alignItems: "center",
},
frequencyText: {
  fontFamily: typography.fontFamilies.primary,
  fontSize: typography.fontSizes.small,
  color: basicColors.textPrimary,
},
tagsText: {
  color: basicColors.textPrimary,
  textTransform: "capitalize",
  marginTop: 15,
  fontFamily: typography.fontFamilies.primary,
  fontWeight: typography.fontWeights.regular,
  fontSize: typography.fontSizes.normal,
},
tagsContainer: {
  borderRadius: 20,
  backgroundColor: basicColors.backgroundLight,
  display: "flex",
  width: "100%",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "space-around",
  paddingHorizontal: 15,
  paddingTop: 10,
  marginTop: 10
},
tagsRow: {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 10,
},
tag: {
  fontFamily: typography.fontFamilies.primary,
  borderRadius: 20,
  backgroundColor: basicColors.backgroundLighter,
  paddingHorizontal: 20,
  paddingVertical: 7,
  justifyContent: "center",
  alignItems: "center",
  width: "25%",
},
addTag: {
  fontFamily: typography.fontFamilies.primary,
  borderRadius: 20,
  backgroundColor: basicColors.backgroundLighter,
  paddingHorizontal: 20,
  paddingVertical: 7,
  justifyContent: "center",
  alignItems: "center",
  width: "25%",
},
notesText: {
  color: colors.textSecondary,
  textTransform: "capitalize",
  paddingTop: 10,
  fontFamily: typography.fontFamilies.primary,
  fontWeight: typography.fontWeights.regular,
  fontSize: typography.fontSizes.regular,
},
notesContainer: {
  width: "100%",
  marginBottom: 100,
  marginTop: 10,
  borderRadius: 20,
  backgroundColor: basicColors.backgroundLight,
  alignSelf: "center",
  display: "flex",
  flexDirection: "column",
  // alignItems: "stretch",
  fontSize: typography.fontSizes.normal,
  color: basicColors.iconTextLight,
  fontWeight: typography.fontWeights.regular,
  textTransform: "capitalize",
  paddingHorizontal: 20,
  paddingTop: 10,
  paddingBottom: 20,
},
noteText: {
  color: "#EDEDED",
  fontFamily: typography.fontFamilies.primary,
  fontSize: typography.fontSizes.small,
},
overlayContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0,0,0,0.5)',
},
closeButton: {
  marginTop: 20,
  padding: 10,
  backgroundColor: 'white',
  borderRadius: 5,
},
closeButtonText: {
  color: 'black',
  fontWeight: 'bold',
},
});