import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import HomePage from "../views/HomePage";
import "../css/BottomNav.css";
import Customer from "../views/Customer";

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
        />
      </BottomNavigation>
    </div>
  );
};

export default Navbar;
