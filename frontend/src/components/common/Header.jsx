import MenuMd from "./Menu-md";
import NavLg from "./Nav-lg";
import WhiteLogo from "../../assets/images/team-logo-white.png";
import ColoredLogo from "../../assets/images/team-logo-colored.png";
import { HeaderContext } from "../utils/context";
import { useContext } from "react";

function Header() {
  const { activePage } = useContext(HeaderContext);

  return (
    <div className={activePage === "home" ? "header home" : "header"}>
      <MenuMd />
      <div className="header__logo">
          <img src={activePage === "home" ? WhiteLogo : ColoredLogo} alt=""/>
      </div>
      <NavLg />
      <div className="header__button">
          <button className="cta-button">Login</button>
      </div>
    </div>
  );
}
  
export default Header;
  