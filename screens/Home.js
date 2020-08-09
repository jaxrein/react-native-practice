import React, { useState, useCallback, useEffect } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation }) => {
  const [palettes, setPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

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

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await getPalettes();
    setIsRefreshing(false);
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
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddNewPalette')
        }}>
          <Text style={styles.button}>Add a color scheme</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  button: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'teal',
    marginBottom: 20,
  },
})

export default Home;