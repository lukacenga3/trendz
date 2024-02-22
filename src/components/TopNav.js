import "../index.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function TopNav() {
    return (
        <div className="topnav">
            <div className="phone-nr">+123-456-7890</div>
            <div className="shopnow">
                <p className="shopnow-text">Get 50% Off on selected items | Shop Now</p>
            </div>
            <div className="language">
                <div className="eng-language">
                    <p>
                        Eng <KeyboardArrowDownIcon />
                    </p>
                </div>
                <div className="location">
                    <p>
                        Location <KeyboardArrowDownIcon />
                    </p>
                </div>
            </div>
        </div>
    );
}
