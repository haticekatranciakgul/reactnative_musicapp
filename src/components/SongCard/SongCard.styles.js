import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    inner_container: {
        padding: 10,
        flex:2,
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 27,
    },
    info_container: {
        flexDirection: 'row',
        flex: 1
    },  
    year: {
        fontSize:12,
        marginLeft: 10,
        color: 'gray',
        fontWeight: 'bold',
    },
    soldout_container:{
        borderWidth: 1,
        borderColor: 'red',
        padding: 5,
        borderRadius: 5,
        alignSelf: 'flex-start',
    },
    soldout_title:{
        color: 'red',
        fontWeight: 'bold',
    },
    content_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
    }


    
});
