import React, { useState } from "react";
import "../index.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { COffcanvas, COffcanvasHeader, COffcanvasTitle, COffcanvasBody, CCloseButton } from "@coreui/react";
import Cart from "../pages/Cart";
import { useCart } from "../contexts/CartProvider";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import Search from "../pages/Search";
import { NavLink } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        right: -2,
        top: 0,
        border: `0.5px solid ${theme.palette.background.paper}`,
        padding: "0 4px",
        background: "#003D29",
        color: "#fff",
    },
}));

function Navbar({ setSnackbarOpen, products }) {
    // const [showSubcategories, setShowSubcategories] = useState(false);
    const [visible, setVisible] = useState(false);
    const { cartQuantity } = useCart();
    const [showMenu, setShowMenu] = useState(false);
    const [serachQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className="flex items-center text-[#003D29]   max-w-[1240px] mx-auto my-3 px-2 text-2xl">
            <nav className=" w-full items-center">
                <div className="flex items-center justify-between">
                    <div className="items-center">
                        <h1 className="flex text-3xl font-bold text-[#003D29] mr-3 ">trendz</h1>
                    </div>

                    {/* Larger devices */}
                    <div className="lg:flex items-center hidden w-full justify-center border-solid">
                        <NavLink to="/" className=" px-4 flex hover:cursor-pointer">
                            Home
                        </NavLink>
                        <NavLink to="/categories" className="px-4 flex hover:cursor-pointer">
                            Categories
                        </NavLink>
                        <NavLink to="/deals" className="px-4 flex hover:cursor-pointer">
                            Deals
                        </NavLink>
                        <div className="px-4 flex hover:cursor-pointer">
                            <Search onChange={handleSearchChange} value={serachQuery} setFilteredProducts={setFilteredProducts} />
                        </div>
                        <NavLink to="/account" className="px-4 flex hover:cursor-pointer items-center">
                            Account <PersonOutlineIcon />
                        </NavLink>
                        <div className="px-4 flex hover:cursor-pointer items-center  ">
                            <StyledBadge badgeContent={cartQuantity} className="items-center" onClick={() => setVisible(true)}>
                                Cart <ShoppingCartIcon style={{ cursor: "pointer" }} />
                            </StyledBadge>
                        </div>
                    </div>
                    <button className="flex lg:hidden ml-2 p-2 focus:outline-none" onClick={toggleMenu}>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>

                {/* Small devices */}
                {showMenu && (
                    <div className="flex w-full mt-4 bg-[#12372A] p-4 rounded-lg text-[#fff]">
                        <div className="flex flex-col w-full gap-2">
                            <NavLink to="/" className="px-4 flex hover:cursor-pointer w-full bg-[#436850] rounded-md p-2">
                                Home
                            </NavLink>
                            <NavLink to="/categories" className="px-4 flex hover:cursor-pointer bg-[#436850] rounded-md p-2">
                                Categories
                            </NavLink>
                            <NavLink to="/deals" className="px-4 flex hover:cursor-pointer bg-[#436850] rounded-md p-2">
                                Deals
                            </NavLink>
                            <div className="px-4 flex hover:cursor-pointer bg-[#436850] rounded-md p-2">
                                <Search onChange={handleSearchChange} value={serachQuery} setFilteredProducts={setFilteredProducts} />
                            </div>
                            <NavLink to="/account" className="px-4 flex hover:cursor-pointer items-center bg-[#436850] rounded-md p-2">
                                Account <PersonOutlineIcon />
                            </NavLink>
                            <div className="px-4 flex hover:cursor-pointer items-center bg-[#436850] rounded-md p-2 ">
                                <StyledBadge badgeContent={cartQuantity} className="items-center" onClick={() => setVisible(true)}>
                                    Cart <ShoppingCartIcon style={{ cursor: "pointer" }} />
                                </StyledBadge>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
            <COffcanvas placement="end" visible={visible} onHide={() => setVisible(false)} style={{ width: "500px" }}>
                <COffcanvasHeader>
                    <COffcanvasTitle>Cart Items</COffcanvasTitle>
                    <CCloseButton className="text-reset flex items-center" onClick={() => setVisible(false)}>
                        <p className="text-2xl">X</p>
                    </CCloseButton>
                </COffcanvasHeader>
                <COffcanvasBody>
                    <Cart />
                </COffcanvasBody>
            </COffcanvas>
        </header>
    );
}

export default Navbar;
