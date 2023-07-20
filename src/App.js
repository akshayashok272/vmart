import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Route,Routes } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
function App() {
  return (
   <>
  
   <Navbar/>
   <Routes>
   <Route exact path='/'  element={<Home/>}/>
   <Route exact path='/Products'  element={<Products/>}/>
   <Route exact path='/Products/:id'  element={<Product/>}/>
   </Routes>
   </>
  );
}

export default App;
