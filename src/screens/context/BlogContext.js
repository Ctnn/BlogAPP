import React,{useState} from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {

    const [blogPosts,setBlogPosts]=useState([]);

    const addBlogPost = props=> {
    setBlogPosts([...blogPosts,{title:`Blog Post #${blogPosts.length+1}`}]);
    // ... Mean take all the current blog posts we have and
    // add them into the new array
    }

  return (
    
    <BlogContext.Provider value={{data: blogPosts,addBlogPost}}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;
