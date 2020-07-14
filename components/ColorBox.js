import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ColorBox = ({ color, hex }) => {
  return (
    <View style={[styles.box, {backgroundColor: hex}]}>
      <Text style={styles.text}>{color}: {hex}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default ColorBox;