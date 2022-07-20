import React,{useContext} from 'react';
import {View,Text,StyleSheet,FlatList,Button } from 'react-native';
import BlogContext from './context/BlogContext';


const IndexScreen = ()=>{

    const {data,addBlogPost}=useContext(BlogContext);

return (<View>
    <Text>Screen Priview</Text>
    <Button 
    title='Add Post'
    onPress={addBlogPost}
    />
    <FlatList
         data={data}
         keyExtractor={(blogPost)=>blogPost.title}
         renderItem={({item})=>{
            return <Text style={styles.text}>{item.title}</Text>
    }}
    />
</View>);
};

const styles = StyleSheet.create({
    text:{
    textAlign:'center'
    },

});

export default IndexScreen;

