import { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Instructions from './components/Instructions';
import MealsPage from './components/MealsPage';
import NewForm from './components/NewForm';
import Recipe from './components/Recipe';
import { categories, recipes } from './Data'

function App() {
  const [recipeName, setRecipeName] = useState("")
  const history = useHistory()
  // const[history,setHistory]=useState(useHistory())
  function handleRecipeClick(name) {
    setRecipeName(name)
  }
  useEffect(() => {
    history.push(`/recipes/${recipeName.split(" ")[0]}`)
    console.log("called", history)
  }, [recipeName])
  const recipeActive = recipes.find(recipe => recipe.name === recipeName)
  // console.log(recipeName,recipeActive)

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/recipes">
          <Switch>
            <Route exact path="/recipes/">
              <MealsPage onRecipeClick={handleRecipeClick} recipes={recipes} categories={categories} />
            </Route>
             <Route path={`/recipes/${recipeName.split(" ")[0]}`}>
             <Switch>
                <Route exact path={`/recipes/${recipeName.split(" ")[0]}/`}>
                  {<Recipe recipe={recipeActive} />}
                </Route>
                <Route path={`/recipes/${recipeName.split(" ")[0]}/instructions`}>
                  <Instructions recipe={recipeActive}/>
                </Route>
              </Switch>
            </Route>
          </Switch>
        </Route>
        <Route path={"/new"}>
          <NewForm categories={categories}/>
        </Route>
      </Switch>
    </div >
  );
}

export default App;
