import { Route, Routes } from 'react-router-dom';
import NavBar from './Pages/Nav/NavBar';
import ProductPage from './Pages/ProductPage';
import PricePlanPage from './Pages/PricePlanPage';
import Pages from './Pages/Pages';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/products' element={<ProductPage />} />
        <Route path='/plans' element={<PricePlanPage />} />
        <Route path='/pages' element={<Pages />} />
        
      </Routes>
    </>
  );
}

export default App;
