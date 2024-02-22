import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function ProductsPagination({ filteredProducts, products }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(8);
    const paginagionNumber = Math.ceil(filteredProducts.length / productsPerPage);

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
    };

    const slicedProducts = filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

    return (
        <div>
            <Stack spacing={3}>
                <Pagination variant="outlined" count={paginagionNumber} currentPage={currentPage} page={currentPage - 1} onChange={handlePageChange} showFirstButton showLastButton />
            </Stack>
        </div>
    );
}
