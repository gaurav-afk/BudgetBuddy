import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from '../styles/components/InfoBar.styles'
import logger from "../utils/logger";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { getResetPwdEmail } from '../services/authService';
// import Snackbar from 'react-native-snackbar';
import { Snackbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store';
import { InputField } from '../components/InputField';
import { InfoBarProps } from '../types/components/InfoBar';
import { INFO_BAR_DURATION } from '../constants/infoBarDuration';
import { messageShown, showMessage } from '../redux/slices/authSlice';

const InfoBar: React.FC<InfoBarProps> = ({content, duration = INFO_BAR_DURATION.LENGTH_MEDIUM}) => {
    const [message, setMessage] = useState<string>(content ?? "")
    const dispatch = useDispatch()

    const onMsgDismiss = () => {
        setMessage("")
        dispatch(messageShown({}))
    }

    useEffect(() => {
        logger.info("displaying message: ", message)
    }, [message])

    return(
        <Snackbar 
        // style={styles.snackbar}
            theme={{ colors: { primary: 'green' } }}
            visible={message.length > 0}
            onDismiss={onMsgDismiss}
            duration={duration}
            // action={{
            // label: 'Undo',
            // onPress: () => {
            //     // Do something if needed when Snackbar action button is pressed
            // },}}
        >
            {message}
        </Snackbar>
    )

}

export default InfoBar

