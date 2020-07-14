import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ColorBox from './components/ColorBox';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Here are some boxes of different colors</Text>
        <ColorBox color="Cyan" hex="#2aa198" />
        <ColorBox color="Blue" hex="#268bd2" />
        <ColorBox color="Magenta" hex="#d33682" />
        <ColorBox color="Orange" hex="#cb4b16" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  }
});

export default App;