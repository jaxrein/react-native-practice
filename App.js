import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Here are some boxes of different colors</Text>
        <View style={[styles.box, {backgroundColor: '#2aa198'}]}>
          <Text style={styles.text}>Cyan: #2aa198</Text>
        </View>
        <View style={[styles.box, {backgroundColor: '#268bd2'}]}>
          <Text style={styles.text}>Blue: #268bd2</Text>
        </View>
        <View style={[styles.box, {backgroundColor: '#d33682'}]}>
          <Text style={styles.text}>Magenta: #d33682</Text>
        </View>
        <View style={[styles.box, {backgroundColor: '#cb4b16'}]}>
          <Text style={styles.text}>Orange: #cb4b16</Text>
        </View>
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
  },
  box: {
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  }
});

export default App;