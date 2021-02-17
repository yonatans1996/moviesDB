import './App.css';
import React,{useState} from "react";
import Results from "./Components/Results";
import Search from "./Components/Search";
import Popup from "./Components/Popup";
import config from "./config"
import axios from "axios";
function App() {
  const KEY=config.MY_API_KEY;
  const [query,setQuery]=useState({
    input:"",
    results:[],
    selected:{}
  });
  const search=(e)=>{
    if(e.key==="Enter")
    {
      document.getElementById("hideKeyboard").focus();
      axios(apiurl+"&s="+query.string).then(({data})=>{
        const results=data.Search;
        setQuery(prevState=>{
          return {...prevState,results:results}
        });
      })
    }
  }
  const apiurl=`http://www.omdbapi.com/?apikey=${KEY}`;

  const handleInput=(e)=>{
    setQuery(prevQurey=>{
      return {...prevQurey,string:e.target.value}
    })
  }
  const openPopup=(id)=>{
    axios(apiurl+"&i="+id)
    .then(({data})=>{
      setQuery(prevState=>{
        return {...prevState,selected:data}
      })
    });
  }
  const closePopup=()=>{
    setQuery(prevState=>{
      return {...prevState,selected:{}}
    });
  }
  return (
    <div className="app">
      <header>
        <h1>🅼🅾🆅🅸🅴🆂 🅻🅸🅱🆁🅰🆁🆈</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search}/>
        <div id="hideKeyboard" />
        <Results results={query.results} openPopup={openPopup}/>
        {console.log(query.selected.Title)}
        {typeof query.selected.Title!="undefined"?
        <Popup selected={query.selected} closePopup={closePopup}/>:false}

      </main>
    </div>
  );
}

export default App;
