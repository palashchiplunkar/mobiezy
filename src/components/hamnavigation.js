import NavLinks from "./navLinks";
import HamDrawer from "./hamdrawer";
import { useState } from "react";
const MobileNavigation= () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
        <div className="hamburger"
        onClick={() => setOpen(!open)} 
        >
      <div className="line" />
      <div className="line" />
      <div className="line" />
    
      
    </div>
    {open && <HamDrawer />}
    
        </div>
    );
}
export default MobileNavigation;