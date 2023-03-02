import "../css/BottomNav.css";

const Navbar = () => {
    return (
        <div class="navbar">
            <div class="navitem">
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
            </div>
        </div>
    )
}

export default Navbar;
