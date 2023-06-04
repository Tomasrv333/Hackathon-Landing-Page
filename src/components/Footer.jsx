
const Footer = () => {
  return (
    <footer className="footer">
        <div className='footer__content row'>
            <div className="col">
                <div className="footer__col-item">
                    <h2>Servicios</h2>
                    <ul>
                        <li>
                            <a href="#">Viajeros</a>
                        </li>
                        <li>
                            <a href="#">Conductores</a>
                        </li>
                        <li>
                            <a href="#">Propietarios</a>
                        </li>
                        <li>
                            <a href="#">Empresas</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__col-item">
                    <h2>Conócenos</h2>
                        <ul>
                            <li>
                                <a href="#">Quíenes somos</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Trabaja con nosotros</a>
                            </li>
                            <li>
                                <a href="#">Preguntas frecuentes</a>
                            </li>
                            <li>
                                <a href="#">Portal del colaborador</a>
                            </li>
                            <li>
                                <a href="#">Fondo de empleados</a>
                            </li>
                        </ul>
                    </div>
                </div>
            <div className="col">
                <div className="footer__col-item">
                    <h2>Contáctanos</h2>
                    <p>Sede principal</p>
                    <p>Av. de las Américas #50-15</p>
                    <p>Centro Comercial Carrera</p>
                    <p>(601) 420 2600</p>
                    <p>Bogotá D.C. Colombia</p>
                </div>
                <div className="footer__col-item">
                    <ul>
                        <li>
                            <a href="#">Líneas de atención</a>
                        </li>
                        <li>
                            <a href="#">Ciudades</a>
                        </li>
                        <li>
                            <a href="#">Ayuda</a>
                        </li>
                        <li>
                            <a href="#">Correo de notificaciones y asuntos judiciales</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col">
                <div className="footer__col-item">
                    <h2>Otros links</h2>
                    <ul>
                        <li>
                            <a href="#">Normatividad</a>
                        </li>
                        <li>
                            <a href="#">Política anticorrupción, antisobornos y antifraude</a>
                        </li>
                        <li>
                            <a href="#">Transparencia y acceso a la información</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__col-item">
                    <h2>App Conductor</h2>
                </div>
                <div className="footer__col-item">
                    <h2>App Viajero</h2>
                </div>
            </div>
            <div className="col">
                <h2>Hola</h2>
            </div>
        </div>
        <div className="footer__content-bottom">
            <img src="src/assets/NavLogo.svg" />
            <a href="">Aviso legal página web</a>
            <a href="">Política de Tratamientos de Datos</a>
            <a href="">Aviso legal</a>
        </div>
        <div className="footer__content-copyright">
            <p>© 2023 Taxis Libres.</p>
        </div>
    </footer>
    
  )
}

export default Footer