import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ColorBox = ({ color, hex }) => {
  const textStyle = {
    color:
      parseInt(hex.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
    fontWeight: 'bold',
  };
  
  return (
    <View style={[styles.box, {backgroundColor: hex}]}>
      <Text style={textStyle}>{color}: {hex}</Text>
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
  }
});

export default ColorBox;