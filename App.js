/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Billers from './src/screens/payment/bills/billers'


const App = () => {
  const [barStyle, setBarStyle] = React.useState('light-content');

  return (
    <>
      <SafeAreaView style={styles.topSafeAreaView} />
      <StatusBar barStyle={barStyle} animated={true}
      // backgroundColor={"#fff"}
      />
      <SafeAreaView style={styles.bodySafeAreaView}>
        <Billers />
      </SafeAreaView>
    </>
  )
    ;
};

const styles = StyleSheet.create({
  topSafeAreaView: {
    backgroundColor: '#fff',
  },
  bodySafeAreaView: {
    flex: 1,
    backgroundColor: '#FAFAFE',
  }
});

export default App;
