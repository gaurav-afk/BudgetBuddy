export type ScreenName = "Home" | "Search" | "Scan" | "Report" | "History" | "Profile"
export type IconType = "FontAwesome" | "Material"

export interface TabIconProps {
    type: IconType
    name: string
    size: number
    color: string
}