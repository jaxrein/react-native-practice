import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import ColorBox from './components/ColorBox';

const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36', textColor: 'white' },
  { colorName: 'Base02', hexCode: '#073642', textColor: 'white' },
  { colorName: 'Base01', hexCode: '#586e75', textColor: 'white' },
  { colorName: 'Base00', hexCode: '#657b83', textColor: 'white' },
  { colorName: 'Base0', hexCode: '#839496', textColor: 'white' },
  { colorName: 'Base1', hexCode: '#93a1a1', textColor: 'white' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900', textColor: 'white' },
  { colorName: 'Orange', hexCode: '#cb4b16', textColor: 'white' },
  { colorName: 'Red', hexCode: '#dc322f', textColor: 'white' },
  { colorName: 'Magenta', hexCode: '#d33682', textColor: 'white' },
  { colorName: 'Violet', hexCode: '#6c71c4', textColor: 'white' },
  { colorName: 'Blue', hexCode: '#268bd2', textColor: 'white' },
  { colorName: 'Cyan', hexCode: '#2aa198', textColor: 'white' },
  { colorName: 'Green', hexCode: '#859900', textColor: 'white' },
];

const App = () => {
  return (
    <SafeAreaView>
      <FlatList
        style={styles.container}
        data={COLORS}
        keyExtractor={item => item.hexCode}
        renderItem={({ item }) => (
          <ColorBox color={item.colorName} hex={item.hexCode} textColor={item.textColor} />
        )}
        ListHeaderComponent={<Text style={styles.title}>Solarized FlatList</Text>}
      />
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