// Use state возращает массив из 2-х объектов
import React, { useState, useRef } from "react";
import ClassCounter from "./Components/ClassCounter";
import Counter from "./Components/Counter";
import PostItem from "./Components/PostItem";
import Postlist from "./Components/PostList";
import PostForm from "./Components/PostForm";
import Mybutton from "./Components/UI/button/MyButton";
import Myinput from "./Components/UI/input/MyInput";
import './styles/App.css';

function App() {  
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Javascript - язык программирования'},
    {id: 2, title: 'JavaScript 2', body: 'Javascript - язык программирования'},
    {id: 3, title: 'JavaScript 3', body: 'Javascript - язык программирования'},
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <Postlist posts={posts} title={'Посты про JS'}/>
    </div>
  );
  
}

export default App;
