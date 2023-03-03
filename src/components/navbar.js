import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import "../css/BottomNav.css";

const Navbar = () => {
    const [value, setvalue] = useState(0);

    const navigate = useNavigate();
    const customerDrawer = () => {
      navigate("/customer");
    };

    return (
        <div>
            <BottomNavigation
                sx={{ width: "100%", position: "fixed", bottom: 0 }}
                value={value}
                onChange={(event, newValue) => setvalue(newValue)}
            >
                <BottomNavigationAction
                    label="Home"
                    icon={<AiFillHome />}
                    showLabel={true}
                />
                <BottomNavigationAction
                    label="Customers"
                    icon={<BiUserCircle />}
                    showLabel={true}
                    onClick={() => customerDrawer()}
                />
                <BottomNavigationAction
                    label="More"
                    icon={<FiMoreHorizontal />}
                    showLabel={true}
                />
            </BottomNavigation>
        </div>
    );
};

export default Navbar;
