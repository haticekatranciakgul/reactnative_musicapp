import react from 'react';
import {TextInput, View, Button} from 'react-native';
import styles from './SearchBar.styles';


const SearchBar =() => {
    return (
        <View style={styles.container}>
            <TextInput placeholder='Ara...' onChangeText={text => console.log(text)}/>
        </View>
    );

}

export default SearchBar;