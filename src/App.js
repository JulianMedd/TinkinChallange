import './App.css';
import { Header } from './Components/Header';
import { Image } from './Components/Image';
import { RecipesContainer } from './Components/RecipesContainer';
import { SearchProvider } from './Context/SearchContext';



function App() {
  return (
    <div className="App">
      <SearchProvider>
        <Header/>
        <Image/>
        <RecipesContainer/>
      </SearchProvider>
    </div>
  );
}

export default App;
