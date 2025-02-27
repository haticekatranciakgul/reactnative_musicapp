import react, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, FlatList, View } from 'react-native';
import musicData from './musicData.json';
import SongCard from './src/components/SongCard';
import SearchBar from './src/components/SearchBar';

function App() {
  const [list, setList] = useState(musicData);

  const renderSong = ({item}) => <SongCard song={item}/>

  const renderSeparator = () => <View style={styles.separator} />

  const handleSearch = text => {
    const filteredList = musicData.filter(song => {
      const searchedText = text.toLowerCase();
      return song.title.toLowerCase().includes(searchedText);
    });
    setList(filteredList);
  };


  return (
    <SafeAreaView style={styles.container}>
      <SearchBar  onSearch={handleSearch}/> 
        <FlatList
          keyExtractor={(item) => item.id}
          data={list}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeparator}
        />
  
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
