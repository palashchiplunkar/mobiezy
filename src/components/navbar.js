import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { AiFillHome } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import "../css/BottomNav.css";
import "../css/global.css";

const Navbar = ({ value }) => {
    return (
        <div>
            <BottomNavigation
                sx={{ width: "100%", position: "fixed", bottom: 0 }}
                value={value}
            >
                <BottomNavigationAction
                    label="Home"
                    icon={<AiFillHome />}
                    showLabel={true}
                    LinkComponent={Link}
                    to="/home"
                />
                <BottomNavigationAction
                    label="Customers"
                    icon={<BiUserCircle />}
                    showLabel={true}
                    LinkComponent={Link}
                    to="/customer"
                />
                <BottomNavigationAction
                    label="More"
                    icon={<FiMoreHorizontal />}
                    showLabel={true}
                    LinkComponent={Link}
                    to="/more"
                />

                <BottomNavigationAction
                    label="Bluetooth"
                    icon={<FiMoreHorizontal />}
                    showLabel={true}
                    LinkComponent={Link}
                    to="/print"
                />
            </BottomNavigation>
        </div>
    );
};

export default Navbar;
