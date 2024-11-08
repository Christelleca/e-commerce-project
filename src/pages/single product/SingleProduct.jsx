import React from 'react';
import { useParams } from 'react-router-dom';
import './SingleProduct.css';
import { allProducts } from '../../data';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

function SingleProduct() {
    const { id } = useParams();
    const product = allProducts.find((product) => product.id === parseInt(id));

    const colors = ['red', 'purple', 'teal', 'green', 'black'];
    const sizes = ['xs', 's', 'm', 'l', 'xl'];

    return (
        <div className="singleProduct-container">
            <Navbar />
            <div className="singleProduct-wrapper">
                <div className="singleProduct-imageSection">
                    <img
                        src={product.img}
                        alt=""
                        className="singleProduct-image"
                    />
                </div>
                <div className="singleProduct-infoSection">
                    <h2 className="singleProduct-title">{product.title}</h2>
                    <p className="singleProduct-number">{product.price}</p>
                    <h4 className="description-title">Description</h4>
                    <p className="singleProduct-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Doloribus eos omnis doloremque nam vitae ipsum amet
                        deserunt incidunt eius harum impedit commodi vel quis
                        repudiandae, dolorum aliquid ducimus, dignissimos
                        delectus.
                    </p>
                    <div className="singleProduct-options">
                        <div className="colors-section">
                            <h4>Colors</h4>
                            <div className="colors">
                                {colors.map((color) => (
                                    <div
                                        key={color}
                                        className="color-circle"
                                        style={{ backgroundColor: color }}
                                    ></div>
                                ))}
                            </div>
                        </div>

                        <div className="sizes-section">
                            <h4>Size</h4>
                            <div className="sizes">
                                {sizes.map((size) => (
                                    <span key={size}>{size}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="addToCart">
                        <button>Add to cart</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SingleProduct;
