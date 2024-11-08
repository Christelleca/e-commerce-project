import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import AllProducts from './pages/all products/AllProducts';
import SingleProduct from './pages/single product/SingleProduct';

function App() {
    return (
        <Router
            future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="products" element={<AllProducts />} />
                <Route path="/product/:id" element={<SingleProduct />} />
            </Routes>
        </Router>
    );
}

export default App;
