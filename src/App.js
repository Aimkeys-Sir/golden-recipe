import './App.css';
import HomePage from './components/HomePage';
import MealsPage from './components/MealsPage';
import Recipe from './components/Recipe';
import {categories,recipes} from './Data'

function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      {/* <MealsPage recipes={recipes} categories={categories}/> */}
      <Recipe recipes={recipes}/>
    </div>
  );
}

export default App;
