import '../css/HomeStyles.css'
const HamburgerMenu = (props) => {
  return (
    <div className="hamburger-menu" onClick={props.clicked}>
      <div className="line" />
      <div className="line" />
      <div className="line" />
    </div>
  )
}

export default HamburgerMenu;
