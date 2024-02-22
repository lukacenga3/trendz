import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import TopNav from "./components/TopNav";
import HeroSection from "./components/HeroSection";
import SingleProduct from "./pages/SingleProduct";
import Deals from "./pages/Deals";
import { Routes, Route } from "react-router-dom";
import Banner from "./pages/Banner";
import Products from "./components/Products";
import CartProvider from "./contexts/CartProvider";
import Footer from "./components/Footer";
import Category from "./pages/Category";

const BASE_URL = "https://trendz-server-vercel.vercel.app";

function App({ setFilteredProducts }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch(`${BASE_URL}/products`);
                const data = await response.json();
                setProducts(data);
            } catch {
                alert("Error fetching products...");
            }
        }
        fetchProducts();
    }, []);

    return (
        <CartProvider>
            <div className="App">
                <Routes>
                    <Route path="/" element={<DefaultLayout products={products} />} />
                    {/* <Route path="/deals" element={<DealsLayout />} /> */}
                    <Route path="/categories" element={<CategoryLayout products={products} />} />
                    <Route path="/products/:id" element={<SingleProductLayout products={products} />} />
                </Routes>
            </div>
        </CartProvider>
    );
}

const DefaultLayout = ({ children, products }) => (
    <>
        <TopNav />
        <Navbar />
        <HeroSection />
        <Products products={products} />
        {children}
        <Banner />
        <Footer />
    </>
);

const SingleProductLayout = ({ products }) => (
    <>
        <TopNav />
        <Navbar />
        <SingleProduct products={products} />
        <Footer />
    </>
);

const CategoryLayout = ({ products }) => (
    <>
        <TopNav />
        <Navbar />
        <Category products={products} />
        <Footer />
    </>
);

export default App;
