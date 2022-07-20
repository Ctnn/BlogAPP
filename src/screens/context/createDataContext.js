import React,{useReducer, userReducer} from 'react';

export default(reducer,actions,initialState)=>{

const Context=React.createContext();

const Provider = ({children})=> {

    const [state,dispatch]=useReducer(reducer,initialState);
/*
    const editBlogPost =()=>{ }
    const deleteBlogPost=()=>{}  Way to use easier and better then this  'useReducer'*/

    return <Context.Provider value={{state: state}}>
        {children}
    </Context.Provider>
};

return {Context,Provider};

};