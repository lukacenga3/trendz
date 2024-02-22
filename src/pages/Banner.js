import React from "react";
import Button from "@mui/material/Button";

export default function Banner() {
    return (
        <div className="relative">
            <div className="relative bg-cover">
                <img className="w-full h-full object-cover" src={require("../assets/banner.jpg")} alt="banner" />
                <div className="absolute top-1/3 right-1 p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 bg-opacity-75 bg-gray-800 text-white">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 sm:mb-4">Get 5% Cash Back On $200</h2>
                    <p className="banner-text text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-6">Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>
                    <div className="banner-btn-container">
                        <Button style={{ backgroundColor: "#003D29", borderRadius: "20px", borderColor: "white", border: "1px solid" }} variant="contained" size="large">
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
