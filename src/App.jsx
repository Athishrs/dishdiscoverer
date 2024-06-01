
import './App.css';
import { YOUR_APP_ID,YOUR_APP_KEY } from './components/apiContent';
import Axios, * as others from 'axios';
import search from "./components/search.svg";
import { useState } from 'react';
import RecipeBox from './components/RecipeBox';



function App() {
  const [query,setQuery]=useState("");
  const [recipes,setRecipes]=useState([]);
  var url=`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  async function fetchData()
  {
    const result=await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data);
  }

  function submit(e)
  {
    e.preventDefault();
    fetchData();

  }

  function redirect(link)
  {
    console.log(link);
    window.location.href=link;
  }
  return (
    <div className="App">
      <h1 className='main_heading'>Dish Discover</h1>
      <p className='tagline'>Satisfying your taste buds!</p>
      <div> 
        <input className='input' onChange={(e)=>{
          setQuery(e.target.value);
        }}></input>
        <input type='submit' value='search' className='submitbtn'onClick={submit}></input>
      </div>
      <div className='app__recipes'>
        {recipes.map(recipe=>{
          return <RecipeBox label={recipe["recipe"]["label"]} image={recipe["recipe"]["image"]} link={recipe["recipe"]["url"]}/>;
        })}
      </div>
    </div>
  );
}

export default App;
