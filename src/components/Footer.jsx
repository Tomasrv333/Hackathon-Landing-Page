import downloadIcon1 from "../assets/icons/footer/downloadIcon1.svg";
import downloadIcon2 from "../assets/icons/footer/downloadIcon2.svg";
import downloadIcon3 from "../assets/icons/footer/downloadIcon3.svg";
import footerIcon1 from "../assets/icons/footer/footerIcon1.svg";
import footerIcon2 from "../assets/icons/footer/footerIcon2.svg";
import footerIcon3 from "../assets/icons/footer/footerIcon3.svg";
import footerIcon4 from "../assets/icons/footer/footerIcon4.svg";
import facebookIcon from "../assets/icons/socialMedia/facebookIcon.svg";
import twitterIcon from "../assets/icons/socialMedia/twitterIcon.svg";
import instagramIcon from "../assets/icons/socialMedia/instagramIcon.svg";
import youtubeIcon from "../assets/icons/socialMedia/youtubeIcon.svg";
import tiktokIcon from "../assets/icons/socialMedia/tiktokIcon.svg";
import linkedinIcon from "../assets/icons/socialMedia/linkedinIcon.svg";
import Logo from "../assets/NavLogo.svg";


const Footer = () => {
  return (
    <>
        <footer className="footer">
            <div className='footer__content'>
                <div className="footer__col">
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
                <div className="footer__col">
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
                <div className="footer__col">
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
                        <div className="footer__col-item--icons d-flex">
                            <img src={downloadIcon1} alt="" />
                            <img src={downloadIcon2} alt="" />
                        </div>
                    </div>
                    <div className="footer__col-item">
                        <h2>App Viajero</h2>
                        <div className="footer__col-item--icons d-flex">
                            <img src={downloadIcon1} alt="Disponible en Google Play" />
                            <img src={downloadIcon2} alt="Disponible en AppGallery" />
                            <img src={downloadIcon3} alt="Disponible en App Store" />
                        </div>
                    </div>
                </div>
                <div className="footer__col-icons">
                    <img src={footerIcon1} alt="Ministerio de transporte" />
                    <img src={footerIcon2} alt="Agencia nacional de seguridad vial" />
                    <img src={footerIcon3} alt="Industria y comercio" />
                    <img src={footerIcon4} alt="SuperTransporte" />
                </div>
            </div>
            <div className="footer__content--mobile">
                <h3>Servicios</h3>
                <h3>Conócenos</h3>
                <h3>Contáctanos</h3>
                <h3>Otros links</h3>
            </div>
            <div className="footer__content-bottom">
                <div className="footer__bottom-text">
                    <img className="footer__text-img" src={Logo} />
                    <a href="">Aviso legal página web</a>
                    <a href="">Política de Tratamientos de Datos</a>
                    <a href="">Aviso legal</a>
                </div>
                <div className="footer__bottom-icons">
                    <img src={facebookIcon} alt="facebook" />
                    <img src={twitterIcon} alt="twitter" />
                    <img src={instagramIcon} alt="instagram" />
                    <img src={youtubeIcon} alt="youtube" />
                    <img src={tiktokIcon} alt="tiktok" />
                    <img src={linkedinIcon} alt="linkedin" />
                </div>
            </div>
            <div className="footer__content-copyright">
                <p>© 2023 Taxis Libres.</p>
            </div>
        </footer>
    </>
  )
}

export default Footer