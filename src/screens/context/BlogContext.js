import React,{useReducer, useState} from 'react';
import createDataContext from './createDataContext';


                  //state=BlogPosts
const BlogReducer=(state,action)=>{
  
  switch(action.type)
    {
      case 'delete_blogpost':
        return state.filter((blogPost)=>blogPost.id!=action.payload);
      case 'add_blogpost':
        return [...state,{id:Math.floor(Math.random()*9999), title:`Blog Post #${state.length+1}`}];
            // ... Mean take all the current blog posts we have and add them into the new array
      default:
        return state;
    }
};

const addBlogPost = dispatch => {
  return (id) => {
    dispatch({ type: 'add_blogpost'});
  };
};

const deleteBlogPost = dispatch=>{
  return id=>dispatch({type:'delete_blogpost',payload:id});
}

export const { Context, Provider } = createDataContext(
  BlogReducer,
  { addBlogPost,deleteBlogPost},
  []
);
