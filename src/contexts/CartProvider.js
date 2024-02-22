import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export default function CartProvider({ children, quantity }) {
    const [cartItems, setCartItems] = useState([]);
    const [cartQuantity, setCartQuantity] = useState(0);

    useEffect(() => {
        const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
        setCartQuantity(totalQuantity);
    }, [cartItems]);
    const addToCart = (product, quantity) => {
        const validQuantity = isNaN(quantity) || quantity <= 0 ? 1 : quantity;

        const existingItem = cartItems.find((item) => item.id === product.id);
        if (existingItem) {
            setCartItems((prevItems) => prevItems.map((item) => (item.id === existingItem.id ? { ...item, quantity: item.quantity + validQuantity } : item)));
        } else {
            setCartItems((prevItems) => [...prevItems, { ...product, quantity: validQuantity }]);
        }
    };

    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, cartQuantity }}>{children}</CartContext.Provider>;
}
export const useCart = () => {
    return useContext(CartContext);
};
