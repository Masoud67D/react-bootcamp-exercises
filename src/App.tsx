import React from 'react';
import './App.css';
// import GrudgeList from './components/grudge-list/GrudgeList';
// import LoginForm from "./components/login-form/LoginForm"
// import Counter from "./components/counter/Counter"
// import Form from "./components/form/Form"
// import TodoList from "./components/todoList/TodoList"
//@ts-ignore
// import { TodoListContextProvider } from "./components/todoList/todoListContext"
// import AppTheme from "./components/theme-switcher/AppTheme"
// import Navbar from "./components/bilingual-webpage/src/components/Navbar"
// import AppBilingual from "../src/components/bilingual-webpage/src/components/AppBilingual"
import TodolistRedux from "./components/todoList/todoListRedux/TodoList__Redux"


function App() {
  return (
    <TodolistRedux />
    // <Provider store={store}>
    //   <Blog />
    // </Provider>
    // <AppBilingual />
    // <Navbar />
    // <AppTheme />
    // <TodoListContextProvider>
    //   <TodoList />
    // </TodoListContextProvider>
  );
}

export default App;
