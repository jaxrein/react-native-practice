import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Switch, Text, TextInput } from 'react-native';

const ColorPaletteModal = () => {
  const [paletteName, setPaletteName] = useState('');
  const [AliceBlueIsEnabled, setAliceBlue] = useState(false);
  const toggleAliceBlue = () => setAliceBlue(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView> */}
        <Text>Name of your color palette</Text>
        <TextInput
          style={styles.input}
          value={paletteName}
          onChangeText={setPaletteName}
        />
        <Text>AliceBlue</Text>
        <Switch 
          trackColor={{ false: 'darkgrey', true: '#90EE90' }}
          thumbColor={AliceBlueIsEnabled ? 'teal' : 'lightgrey'}
          ios_backgroundColor='gold'
          onValueChange={toggleAliceBlue}
          value={AliceBlueIsEnabled}
        />
      {/* </ScrollView> */}
    </SafeAreaView>
  )
}

export default ColorPaletteModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 5,
    marginTop: 5,
    marginBottom: 20,
  }
});