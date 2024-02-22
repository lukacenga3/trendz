import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useCart } from "../contexts/CartProvider";

const Cart = () => {
    const { cartItems, removeFromCart, clearCart } = useCart();
    const [cartQuantity, setCartQuantity] = useState(0);

    useEffect(() => {
        setCartQuantity(cartItems.reduce((total, item) => total + item.quantity, 0));
    }, [cartItems]);

    const calculateGrandTotal = () => {
        return cartItems.reduce((total, item) => total + item.quantity * parseFloat(item.price), 0);
    };

    return (
        <div className="cart">
            {cartItems.map((item) => (
                <div className="flex border-b" key={item.id}>
                    <div className="cart-img">
                        <img src={item.src} alt={item.title} />
                    </div>
                    <div className="cart-details text-base antialiased">
                        <div className="text-xl text-black-800 font-bold">{item.title} </div>
                        <div className="text-lg text-gray-800 ">Quantity: {item.quantity}</div>
                        <div className="text-lg text-black-600">Price: ${item.price}</div>
                        <div className="text-lg text-black-600">
                            Total Price: ${item.quantity * parseFloat(item.price)} ( {item.quantity}x ${item.price} )
                        </div>
                        <Button onClick={() => removeFromCart(item.id)} variant="outlined" color="error" size="medium">
                            Remove
                        </Button>
                    </div>
                </div>
            ))}
            <div className="grand-total">
                <p className="text-xl text-black-800 font-bold">Grand Total: ${calculateGrandTotal()}</p>
            </div>
            <div className="cart-buttons">
                <Button onClick={clearCart} style={{ color: "black", backgroundColor: "transparent", borderRadius: "20px", border: "1px solid black", size: "large" }} variant="contained">
                    Clear Cart
                </Button>
                <Button style={{ backgroundColor: "#003D29", borderRadius: "20px" }} variant="contained" size="large">
                    CheckOut
                </Button>
            </div>
        </div>
    );
};

export default Cart;
