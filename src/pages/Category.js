import React, { useState } from "react";

const Category = ({ products, categoryName }) => {
    const [filterCategory, setFilterCategory] = useState([]);

    const handleFilter = (event) => {
        const selectedCategory = event.target.value;
        const filteredProducts = products.filter((product) => {
            return product.category === selectedCategory;
        });
        setFilterCategory(filteredProducts);
    };
    const displayedProducts = filterCategory.length > 0 ? filterCategory : products;
    return (
        <>
            <div className="main-category-container flex mx-10">
                <div className="filter-container flex flex-col h-screen w-80 border-2 mt-10 mx-7 bg-[#F3F9FD]">
                    <h1 className="text-2xl  items-center">Filters</h1>
                    <div className="checkboxes flex flex-col items-start justify-center mx-3 mt-3">
                        <ul>
                            <li className="mb-2 text-lg flex">
                                <input type="checkbox" name="category" value="smartphone" onChange={handleFilter} />
                                <label htmlFor="category">Smartphone</label>
                            </li>
                            <li className="mb-2 text-lg flex">
                                <input type="checkbox" name="category" value="keyboard" onChange={handleFilter} />
                                <label htmlFor="category">Keyboard</label>
                            </li>
                            <li className="mb-2 text-lg flex">
                                <input type="checkbox" name="category" value="headset" onChange={handleFilter} />
                                <label htmlFor="category">Headset</label>
                            </li>
                            <li className="mb-2 text-lg flex">
                                <input type="checkbox" name="category" value="mouse" onChange={handleFilter} />
                                <label htmlFor="category">Mouse</label>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="category-grid grid grid-cols-4 gap-3 my-10 mx-7 justify-center">
                    {displayedProducts.map((product) => (
                        <div key={product.id} className="border-2 p-3 w-72">
                            <img className="h-2/3 w-60 items-center" src={product.src} alt={product.title} />
                            <div className="py-2 ">
                                <h3>{product.title}</h3>
                                <p>{product.description}</p>
                                <ul>
                                    <li>Brand: {product.brand}</li>
                                    <li>Price: ${product.price}</li>
                                    {product.discount > 0 && <li>Discount: {product.discount}%</li>}
                                    {/* Display other relevant details similarly */}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Category;
