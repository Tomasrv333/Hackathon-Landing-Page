
const Header = () => {
  return (
    <nav className="navbar">
        <div className="d-flex align-middle">
            <a href="#banner" style={{ border: "none" }}>
              <img className="navbar__logo" src="src/assets/NavLogo.svg"/>
            </a>
            
            <ul className="navbar__list d-flex">
                <li className="navbar__list-item"><a href="#info">Información</a></li>
                <li className="navbar__list-item"><a href="#partners">Patrocinadores</a></li>
                <li className="navbar__list-item"><a href="#reward">Premios</a></li>
            </ul>
        </div>
        <button className="navbar__btn btn--secondary"><a style={{ border: "none" }} href="#form">Inscribete ahora!</a></button>
    </nav>
  )
}

export default Header