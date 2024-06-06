export type InputFieldProps = {
    label: string;
    placeholder: string;
    secureTextEntry?: boolean;
    // icon: any;
    icon: React.ReactNode;
    visibilityIcon?: any;
    value: string;
    onChangeText: (text: string) => void;
    onVisibilityIconPress?: () => void;
};
  