
import './App.css';
import {useState} from 'react';
import React from 'react';
function App() {
  var [text,setText]=useState('');
  var [count,setCount]=useState({word:0,character:0});
function handleChange(Event)
{
  
    setText(Event.target.value);
    var arr=Event.target.value.split(/[\s, ]+/);
   arr= arr.filter((item)=>item!=='');
    setCount({word:arr.length,character:Event.target.value.length});
    
  
    
  
  
}
  return(
    <div>
      <form>
        <input type='text' value={text} onChange={handleChange}></input>
        <br></br>
        {text}
        <br></br>
        <h3>Words:{count.word}
        <br></br>Characters:{count.character}</h3>
      </form>
    </div>

  );
  
}

export default App;
