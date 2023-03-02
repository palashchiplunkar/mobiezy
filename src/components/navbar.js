import "../css/BottomNav.css";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import "reactjs-bottom-navigation/dist/index.css";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";

const Navbar = () => {
  const [value, setvalue] = useState(0);
  // const bottomNavItems = [
  //   {
  //     title: 'Home',

  //     icon: <AiFillHome style={{color:'#0090DA'}}/>,

  //     activeIcon: <AiFillHome />
  //   },

  //   {
  //     title: 'Search',

  //     icon: <BiUserCircle style={{color:'#0090DA'}}/>,
  //     activeIcon: <BiUserCircle/>

  //   },

  //   {
  //     title: 'Notifications',

  //     icon: <FiMoreHorizontal style={{color:"#0090D"}}/>,

  //     activeIcon:<FiMoreHorizontal/>
  //   }
  // ]
  return (
    <div>
      {/* <div class="navitem">
                <img src={require("../assets/home.png")} class="nav_img" />
                <span class="home_nav">Home</span>
            </div>

            <div class="navitem">
                <img src={require("../assets/profile.png")} class="nav_img" />
                <span>Customers</span>
            </div>

            <div class="navitem">
                <img src={require("../assets/three_more.png")} class="nav_img" />
                <span class="more_nav">More</span>
            </div> */}
      {/* <BottomNavigation
        items={bottomNavItems}
        defaultSelected={0}
      
        onItemClick={(item) => console.log(item)}
      /> */}
      <BottomNavigation
      sx={{width:'100%',position:'fixed',bottom:0}}
        value={value}
        onChange={(event, newValue) => setvalue(newValue)}
      >
        <BottomNavigationAction label="Home" icon={<AiFillHome />} showLabel={true} />
        <BottomNavigationAction label="Customers" icon={<BiUserCircle />} showLabel={true} />
        <BottomNavigationAction label="More" icon={<FiMoreHorizontal />} showLabel={true} />
      </BottomNavigation>
    </div>
  );
};

export default Navbar;
