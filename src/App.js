import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import MealsPage from './components/MealsPage';
import Recipe from './components/Recipe';
import { categories, recipes } from './Data'

function App() {
  const [recipeName,setRecipeName]=useState("")
  function handleRecipeClick(name){
    setRecipeName(name)
  }
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/recipes">
             <MealsPage recipes={recipes} categories={categories} />
        </Route>
        <Route path={`${recipeName}`}>

        </Route>
      </Switch>

   
      {/* <Recipe recipes={recipes}/> */}
    </div>
  );
}

export default App;
