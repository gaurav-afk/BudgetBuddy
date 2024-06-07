import React, { useState } from 'react';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { TabIconProps } from '../types/components/TabIcon';


const TabIcon: React.FC<TabIconProps> = ({type, name, size, color}) => {
    const renderIcon = () => {
        switch(type) {
            case "FontAwesome":
                return <FontAwesomeIcon name={name} size={size} color={color} />
            case "Material":
                return <MaterialIcon name={name} size={size} color={color} />
            default:
                return <></>
        }
    };

    return (
        renderIcon()
    )
  };

export default TabIcon