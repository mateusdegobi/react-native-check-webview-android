import { NativeModules } from 'react-native';

const { CheckWebviewAndroidView } = NativeModules;

const checkWebViewAndroid = async (): Promise<boolean> => {
  try {
    return await CheckWebviewAndroidView.checkWebView();
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default checkWebViewAndroid;
