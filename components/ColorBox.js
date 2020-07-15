import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ColorBox = ({ color, hex, textColor }) => {
  return (
    <View style={[styles.box, {backgroundColor: hex}]}>
      <Text style={{color: textColor, fontWeight: 'bold'}}>{color}: {hex}</Text>
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