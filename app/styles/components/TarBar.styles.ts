import { StyleSheet } from "react-native"
import screenNames from "../../constants/screenNames"
import { IconType, ScreenName } from "../../types/components/TabIcon";


export const screenIcons: {[k in ScreenName]: {"type": IconType, "iconName": string}} = {
    "Home": { type: "FontAwesome", iconName: "home"},
    "Search": { type: "FontAwesome",  iconName: "search"},
    "Scan": { type: "Material", iconName: "document-scanner"},
    "History": { type: "Material",  iconName: "history"},
    "Report": { type: "FontAwesome",  iconName: "bar-chart-o"},
    "Profile": { type: "Material",  iconName: "person"},
}

export default StyleSheet.create({
    
});