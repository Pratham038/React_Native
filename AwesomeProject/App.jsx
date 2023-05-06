import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import A from './components/A';
import PrompBtn from './components/PrompBtn';
import InputBtn from './components/InputBtn';
import Touch from './components/Touch';
import Imagee from './components/Imagee';
import Statee from './components/Statee';
const App = () => {
  let z = 9;
  return (
    <>
      <SafeAreaView style={styles.view}>
        <Text numberOfLines={1}>Pratham {z}</Text>
        {/* <Imagee />
        <A />
        <Touch />
        <InputBtn />
        <PrompBtn /> */}
        <Statee />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  view: {
    //to perfect top padding.
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: 'dodgerblue',
  },
});

export default App;
