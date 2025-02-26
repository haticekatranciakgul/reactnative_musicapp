import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, FlatList, View } from 'react-native';
import musicData from './musicData.json';
import SongCard from './src/components/SongCard';

function App() {
  const renderSong = ({item}) => <SongCard song={item}/>

  const renderSeparator = () => <View style={styles.separator} />

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={musicData}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  separator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  }
});
