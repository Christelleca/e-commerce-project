import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import AllProducts from './pages/all products/AllProducts';
import SingleProduct from './pages/single product/SingleProduct';
import Cart from './pages/cart/Cart';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
    return (
        <Provider store={store}>
            {' '}
            <Router
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="login" element={<Login />} />
                    <Route path="products" element={<AllProducts />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
