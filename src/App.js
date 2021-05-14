import './App.css';
import { Header } from './Components/Header';
import { Image } from './Components/Image';
import { RecipesContainer } from './Components/RecipesContainer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Image/>
      <RecipesContainer/>
    </div>
  );
}

export default App;
