// utils/toastUtils.js
import Toast from 'react-native-toast-message';

export const showToast = (type, text1, text2, position = "bottom") => {
    Toast.show({
        type,
        text1,
        text2,
        position
    });
};
