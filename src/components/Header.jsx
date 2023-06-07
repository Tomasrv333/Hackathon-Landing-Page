import { useState } from "react";
import Logo from "../assets/NavLogo.svg";
import iconMenu from "../assets/icons/icon-menu.svg";
import iconMenuClose from "../assets/icons/icon-menu-close.svg";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsClicked(!isClicked);
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="navbar">
        <div className="d-flex align-middle">
            <a href="#banner" style={{ border: "none" }} aria-label="Back to start">
              <img className="navbar__logo" src={Logo} alt="taxis-libres-logo"/>
            </a>
            <ul className="navbar__list d-flex">
              <li className="navbar__list-item"><a href="#info">Información</a></li>
              <li className="navbar__list-item"><a href="#partners">Patrocinadores</a></li>
              <li className="navbar__list-item"><a href="#reward">Premios</a></li>
            </ul>
        </div>
        <a style={{ border: "none" }} href="#form">
          <button className="navbar__btn btn--secondary">Inscribete ahora!</button>
        </a>
        <div className="navbar__menu" onClick={handleMenuToggle}>
          {isClicked ? 
            <img src={iconMenuClose} alt="close-icon" />
          :
            <img src={iconMenu} alt="menu-icon" />
          }
        </div>
        {isOpen && (
          <ul className="navbar__list--mobile d-flex">
            <li className="navbar__list-item--mobile"><a href="#info" onClick={handleMenuToggle}>Información</a></li>
            <li className="navbar__list-item--mobile"><a href="#partners" onClick={handleMenuToggle}>Patrocinadores</a></li>
            <li className="navbar__list-item--mobile"><a href="#reward" onClick={handleMenuToggle}>Premios</a></li>
          </ul>
        )}
      </nav>
    </>
  )
}

export default Header