import React, { useState, useCallback, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation }) => {
  const [palettes, setPalettes] = useState([]);

  const getPalettes = useCallback(async () => {
    const result = await fetch('https://color-palette-api.kadikraman.now.sh/palettes');
    if (result.ok) {
      const palettes = await result.json();
      setPalettes(palettes);
    }
  }); 

  useEffect(() => {
    getPalettes();
  }, []);

  return (
    <FlatList
      style={styles.list}
      data={palettes}
      keyExtractor={item => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          onPress={() => navigation.push('ColorPalette', item)}
          palette={item}
        /> 
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
})

export default Home;