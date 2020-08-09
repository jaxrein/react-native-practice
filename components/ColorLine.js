import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

const ColorLine = ({ color }) => {
  const [isEnabled, setEnabled] = useState(false);
  const toggleSwitch = () => setEnabled(previousState => !previousState);

  return (
    <View style={styles.line}>
      <Text style={styles.text}>{color}</Text>
      <Switch
        style={styles.switch}
        trackColor={{ false: 'darkgrey', true: '#90EE90' }}
        thumbColor={isEnabled ? 'teal' : 'LightSlateGray'}
        ios_backgroundColor='gold'
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  )
};

export default ColorLine;

const styles = StyleSheet.create({
  line: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    textAlignVertical: 'center',
  }
});