import axios from 'axios';
import React, { useState, useEffect } from 'react'; 
import './App.css';
import CharcterCard from './components/CharcterCard';
import Header from './components/Header.js';
import Search from './components/Search';


const App = () =>{
  const [content, setContent] = useState([]);
  
  const [buffer, setBuffer] = useState(true);
  const[query,setQuery]=useState('');


  useEffect(() => {
    const getData=async()=>{
      const output = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
     
      console.log(output.data)
  
      setContent(output.data)
     
      setBuffer(false)
    }
    getData()
    
  },[query])


  return (
    <div className="App">
     <Header/>
     <Search getQuery={(q)=>setQuery(q)}/>
     <CharcterCard buffer={buffer} content={content}/>
    
  

    </div>
  );
}

export default App;
