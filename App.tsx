import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainScreen from './src/screens/MainScreens';
import Toast from 'react-native-toast-message';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <MainScreen />
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
