import React,{useContext} from 'react';
import {View,Text,StyleSheet,FlatList,Button,TouchableOpacity } from 'react-native';
import {Context} from './context/BlogContext.js';
import {Feather} from '@expo/vector-icons';


const IndexScreen = () => {
    const { state, addBlogPost,deleteBlogPost } = useContext(Context);
  
    return (
      <View>
       
        <Button title="Add Post" onPress={addBlogPost} style={styles.button}/>
        <FlatList
          data={state}
          keyExtractor={blogPost => blogPost.title}
          renderItem={({ item }) => {
            return (<View style={styles.row}>
                <Text style={styles.title}>{item.title}-{item.id}</Text>
                <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                <Feather  style={styles.icon} name="trash"/>
                </TouchableOpacity>
                </View>);
          }}
        />
      </View>
    );
  };
  const styles = StyleSheet.create({
   
    row:{
            marginTop:8,
            flexDirection:'row', //Same Line Settings
            justifyContent:'space-between',
            paddingVertical:20,
            borderTopWidth:1,
            borderColor:'gray',
            borderRadius:12,
            borderWidth:2,
            backgroundColor:'#FFA',
    },
    title:{
        fontSize:18,
    },
    icon:{
        fontSize:24,
    },
    button:{
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
  });
  
  export default IndexScreen;

