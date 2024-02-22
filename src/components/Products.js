import React, { useEffect, useState, useRef } from "react";
import "../index.css";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartProvider";
import { Alert, Snackbar } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Products = ({ products }) => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedType, setSelectedType] = useState("");
    const [sortBy, setSortBy] = useState("default");
    const { addToCart } = useCart();
    const [open, setOpen] = useState(false);
    const productContainerRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(8);
    const paginagionNumber = Math.ceil(filteredProducts.length / productsPerPage);
    const [isMounted, setIsMounted] = useState(false);

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
        scrollToTop();
    };

    const handleCloseAlert = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    const handleTypeChange = (event) => {
        const selectedType = event.target.value;
        setSelectedType(selectedType);
        applyFilters(selectedType, sortBy);
    };

    const handleSortChange = (event) => {
        const newSortBy = event.target.value;
        setSortBy(newSortBy);
        applyFilters(selectedType, newSortBy);
    };

    const applyFilters = (selectedType, sortBy) => {
        const productsToFilter = selectedType ? products.filter((product) => product.category === selectedType) : products;

        let updatedProducts;
        if (productsToFilter) {
            if (sortBy === "price-low-to-high") {
                updatedProducts = productsToFilter.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            } else if (sortBy === "price-high-to-low") {
                updatedProducts = productsToFilter.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            } else {
                updatedProducts = productsToFilter;
            }
        } else {
            updatedProducts = [];
        }

        setFilteredProducts(updatedProducts);
        setCurrentPage(1);
        // scrollToTop();
    };

    const slicedProducts = filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

    const scrollToTop = () => {
        if (productContainerRef.current) {
            productContainerRef.current.scrollIntoView({
                behavior: "auto",
                block: "start",
            });
        }
    };

    useEffect(() => {
        if (isMounted) {
            scrollToTop();
        } else {
            setIsMounted(true);
        }
    }, [currentPage]);

    useEffect(() => {
        applyFilters(selectedType, sortBy);
    }, [products, selectedType, sortBy]);

    return (
        <>
            <div className="pb-10">
                <div className="product-filters" ref={productContainerRef}>
                    <div className="filter-group">
                        <select id="headphone-type" value={selectedType} onChange={handleTypeChange}>
                            <option value="">All Categories</option>
                            <option value="Smartphone">Smartphone</option>
                            <option value="Keyboard">Keyboard</option>
                            <option value="Headphone">Headphone</option>
                            <option value="Mouse">Mouse</option>
                        </select>
                    </div>
                    <div className="filter-group">
                        <select id="sort-by" value={sortBy} onChange={handleSortChange}>
                            <option value="price-low-to-high">Price: Low to High</option>
                            <option value="price-high-to-low">Price: High to Low</option>
                            <option value="newest">Newest Arrivals</option>
                        </select>
                    </div>
                    <div className="pagination">
                        <Stack spacing={3}>
                            <Pagination variant="outlined" count={paginagionNumber} page={currentPage} onChange={handlePageChange} showFirstButton showLastButton />
                        </Stack>
                    </div>
                </div>
                <p style={{ fontWeight: "bold", fontSize: "20px", display: "flex", width: "90%", marginLeft: "auto", marginRight: "auto", paddingTop: "20px", paddingBottom: "20px" }}>All products for you:</p>
                <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {slicedProducts.map((product) => (
                        <div className="card-container" key={product.id}>
                            <div className="img-container">
                                <span>
                                    {" "}
                                    <FavoriteBorderIcon style={{ position: "absolute", right: "15", top: "15" }} />
                                </span>
                                <Link to={`/products/${product.id}`}>
                                    <img className="card-img" src={product.src} alt={product.title} width={"300px"} height={"250px"} />
                                </Link>
                            </div>
                            <div className="details-container">
                                <div className="details">
                                    <h3>{product.title}</h3>
                                    <p className="price">${product.price}</p>
                                </div>
                                <p>{product.description}</p>
                                <p className="rating">{product.ratings}</p>
                                <Button
                                    onClick={() => {
                                        addToCart(product);
                                        setOpen(true);
                                    }}
                                    className="cart-btn"
                                    style={{
                                        color: "black",
                                        backgroundColor: "transparent",
                                        borderRadius: "20px",
                                        marginTop: "10px",
                                        border: "1px solid black",
                                    }}
                                    variant="contained"
                                    size="medium"
                                    onMouseEnter={() => {}}
                                    sx={{
                                        ":hover": {
                                            bgcolor: "#003D29",
                                        },
                                    }}
                                >
                                    Add to Cart
                                </Button>
                                {open && (
                                    <div className="alert">
                                        <Snackbar open={open} autoHideDuration={2000} onClose={handleCloseAlert}>
                                            <Alert onClose={handleCloseAlert} variant="filled" style={{ backgroundColor: "#003D29" }} severity="success" sx={{ position: "fixed", top: 5, left: "43%", width: "20%", zIndex: 1001 }}>
                                                Product added to cart!
                                            </Alert>
                                        </Snackbar>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pagination">
                    <Stack spacing={3}>
                        <Pagination variant="outlined" count={paginagionNumber} page={currentPage} onChange={handlePageChange} showFirstButton showLastButton />
                    </Stack>
                </div>
            </div>
        </>
    );
};

export default Products;
