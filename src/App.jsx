import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Home/Home';
import Ingredients from './Inggredients/Ingredients';


function App() {


  return (
    <BrowserRouter>
    <div>
      
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/ingredients/:id" element = {<Ingredients/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
