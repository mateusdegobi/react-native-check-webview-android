import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import checkWebviewAndroidView from 'react-native-check-webview-android';

export default function App() {
  React.useEffect(() => {
    checkWebviewAndroidView().then((result) => {
      console.log('checkWebviewAndroidView', result);
    });
  }, []);

  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
