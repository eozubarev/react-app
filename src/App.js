// Use state возращает массив из 2-х объектов
import React, { useState } from "react";
import ClassCounter from "./Components/ClassCounter";
import Counter from "./Components/Counter";
import PostItem from "./Components/PostItem";
import Postlist from "./Components/PostList";
import './styles/App.css';

function App() {  
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Javascript - язык программирования'},
    {id: 2, title: 'JavaScript 2', body: 'Javascript - язык программирования'},
    {id: 3, title: 'JavaScript 3', body: 'Javascript - язык программирования'},
  ])
  const [posts2, setPosts2] = useState([
    {id: 1, title: 'Python', body: 'Javascript - язык программирования'},
    {id: 2, title: 'Python', body: 'Javascript - язык программирования'},
    {id: 3, title: 'Python', body: 'Javascript - язык программирования'},
  ])

  return (
    <div className="App">
      <Postlist posts={posts} title={'Посты про JS'}/>
      <Postlist posts={posts2} title={'Посты про Phyton'}/>
    </div>
  );
  
}

export default App;
