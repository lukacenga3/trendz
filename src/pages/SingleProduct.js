import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import "../index.css";
import { useCart } from "../contexts/CartProvider";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const SingleProduct = ({ products }) => {
    const { id } = useParams();
    const selectedProduct = products.find((product) => product.id.toString() === id);
    const [quantity, setQuantity] = useState(1);
    const ref = useRef(null);
    const { addToCart } = useCart();

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity((prevQuantity) => {
            return prevQuantity > 1 ? prevQuantity - 1 : prevQuantity;
        });
    };

    const handleAddToCart = () => {
        addToCart(selectedProduct, quantity);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        // Scroll to the top of the product container when the component mounts
        scrollToTop();
    }, []);

    useEffect(() => {}, [selectedProduct]);

    return (
        <div className="single-product" ref={ref}>
            <div className="product-pathname">
                Categories / {selectedProduct?.category} / {selectedProduct?.title}
            </div>
            {selectedProduct ? (
                <>
                    <div className="flex single-product-container md:flex-row flex-col">
                        <div className="flex  self-center single-product-image">
                            <img src={selectedProduct.src2} width={"450px"} height={"500px"} alt={selectedProduct.title} />
                        </div>

                        <div className="flex flex-col self-center h-[449px] w-[450px] rounded-md shadow-[0_4px_8px_rgba(0,0,0,0.2)] p-10">
                            <h1 className="text-2xl mb-4">{selectedProduct.title}</h1>
                            <p className="pb-3 border-b-[#d3cccc]-[1px]">{selectedProduct.description2}</p>
                            <p className="single-product-rating">{selectedProduct.ratings}/10</p>
                            <p className="single-product-price">${selectedProduct.price}</p>

                            <div className="quantity-controls">
                                <button className="quantity-button" style={{ paddingLeft: "10px", paddingRight: "10px" }} variant="contained" onClick={decrementQuantity}>
                                    -
                                </button>
                                <span>{quantity}</span>
                                <button className="quantity-button" onClick={incrementQuantity}>
                                    +
                                </button>
                            </div>
                            <div className="action-buttons">
                                <Button style={{ backgroundColor: "#003D29" }} variant="contained" size="large" width="100%">
                                    Buy Now
                                </Button>
                                <Button onClick={handleAddToCart} style={{ color: "black", backgroundColor: "transparent", border: "1px solid black", size: "large" }} variant="contained">
                                    Add to Cart
                                </Button>
                            </div>
                            <div className="shipping">
                                <div>
                                    <LocalShippingIcon style={{ color: "#ff7b2d" }} />
                                </div>
                                <div className="shipping-details">
                                    <p>Free Delivery within 3-4 days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div>Product not found.</div>
            )}
        </div>
    );
};

export default SingleProduct;
