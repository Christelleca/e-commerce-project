import PropTypes from 'prop-types';
import { CiSearch, CiShoppingCart } from 'react-icons/ci';
import './Products.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

function Products({ items, heading }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };

    const handleViewDetails = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div>
            <h1 className="heading">{heading}</h1>
            <div className="products-container">
                {Array.isArray(items) && items.length > 0 ? (
                    items.map((item) => (
                        <div key={item.id} className="product-container">
                            <img
                                src={item.img}
                                alt={item.title || 'Product image'}
                                className="product-image"
                            />
                            <div className="product-desc">
                                <h3>{item.title}</h3>
                                <span>${item.price}</span>
                            </div>
                            <div className="product-info">
                                <button
                                    className="icon"
                                    onClick={() => handleAddToCart(item)}
                                >
                                    <CiShoppingCart />
                                    Add To Cart
                                </button>
                                <button
                                    className="icon"
                                    onClick={() => handleViewDetails(item.id)}
                                >
                                    <CiSearch />
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No products available</p>
                )}
            </div>
        </div>
    );
}

Products.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            img: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        })
    ).isRequired,
    heading: PropTypes.string.isRequired,
};

export default Products;
