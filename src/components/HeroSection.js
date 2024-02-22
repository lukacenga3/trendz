import Button from "@mui/material/Button";

export default function HeroSection() {
    return (
        <div className="relative">
            <div className="relative bg-cover ">
                <img src={require("../assets/h3.jpg")} alt="hero-img" className="w-full h-full object-cover"></img>
                <div className="absolute top-1/3 left-1/10 text-white text-md ml-2 ">
                    <p className="text-4xl text-wrap md:text-balance">Grab up to 50% Off on selected headphones</p>
                    <Button style={{ backgroundColor: "#003D29", borderRadius: "20px", borderColor: "white", border: "1px solid", hover: "#003D29" }} variant="contained" size="large">
                        Buy Now
                    </Button>
                </div>
            </div>
        </div>
    );
}
