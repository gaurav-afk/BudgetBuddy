import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
    SignIn: undefined;
    Register: undefined;
    ForgetPwd: undefined
};

export type SignInProp = NativeStackNavigationProp<RootStackParamList, "SignIn">