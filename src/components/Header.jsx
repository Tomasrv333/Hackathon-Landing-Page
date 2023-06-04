
const Header = () => {
  return (
    <nav className="navbar">
        <div className="d-flex align-middle">
            <img className="navbar__logo" src="src/assets/NavLogo.svg" />
            <ul className="navbar__list d-flex">
                <li className="navbar__list-item">Información</li>
                <li className="navbar__list-item">Premios</li>
                <li className="navbar__list-item">Patrocinadores</li>
            </ul>
        </div>
        <button className="navbar__btn btn--secondary">Inscribete ahora!</button>
    </nav>
  )
}

export default Header