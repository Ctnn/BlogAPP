import React,{useReducer, useState} from 'react';
import createDataContext from './createDataContext';


                  //state=BlogPosts
const BlogReducer=(state,action)=>{
  
  switch(action.type)
    {
      case 'add_blogpost':
        return [...state,{title:`Blog Post #${state.length+1}`}];
            // ... Mean take all the current blog posts we have and add them into the new array
      default:
        return state;
    }
};

const addBlogPost = dispatch => {
  return () => {
    dispatch({ type: 'add_blogpost' });
  };
};

export const { Context, Provider } = createDataContext(
  BlogReducer,
  { addBlogPost },
  []
);
