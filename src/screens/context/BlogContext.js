import React,{useReducer, useState} from 'react';

const BlogContext = React.createContext();
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
}
;
export const BlogProvider = ({ children }) => {
  //You changed to state for blogPosts
    const [blogPosts,dispatch]=useReducer(BlogReducer,[]);

    const addBlogPost = ()=> {
      dispatch({type:'add_blogpost',})
    };
    
    /*
    const editBlogPost =()=>{ }
    const deleteBlogPost=()=>{}  Way to use easier and better then this  'useReducer'*/


  return (
    
    <BlogContext.Provider value={{data: blogPosts,addBlogPost}}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;
