// Use state возращает массив из 2-х объектов
import React, { useState } from "react";
import ClassCounter from "./Components/ClassCounter";
import Counter from "./Components/Counter";
import './styles/App.css';

function App() {  

  return (
    <div className="App">

       <div className="post">
          <div className="post__content">
              <strong>1. Javascript</strong>
              <div>
                Javascript - язык программирования
              </div>
          </div>
          <div className="post__btns">
              <button>Удалить пост</button>
          </div>
       </div>
       
    </div>
  );
  
}

export default App;
