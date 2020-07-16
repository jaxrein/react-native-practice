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
    marginBottom: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  }
});

export default ColorBox;