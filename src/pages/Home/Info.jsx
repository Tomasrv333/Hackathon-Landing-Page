import figureInfo1 from "../../assets/figures/figureInfo1.svg";
import figureIcon4 from "../../assets/figures/figureIcon5.svg";
import figureIcon from "../../assets/figures/figureIcon.svg";
import figureBox from "../../assets/figures/figureBox.svg";
import facebookIcon from "../../assets/icons/socialMedia/facebookIcon.svg";
import twitterIcon from "../../assets/icons/socialMedia/twitterIcon.svg";
import instagramIcon from "../../assets/icons/socialMedia/instagramIcon.svg";
import youtubeIcon from "../../assets/icons/socialMedia/youtubeIcon.svg";
import tiktokIcon from "../../assets/icons/socialMedia/tiktokIcon.svg";
import linkedinIcon from "../../assets/icons/socialMedia/linkedinIcon.svg";

const Info = () => {
  return (
    <div id="info" className="info">
        <div className="info__side">
            <div className="info__side-content">
                <div className="info__side-icons">
                    <img src={facebookIcon} alt="" />
                    <img src={twitterIcon} alt="" />
                    <img src={instagramIcon} alt="" />
                    <img src={youtubeIcon} alt="" />
                    <img src={tiktokIcon} alt="" />
                    <img src={linkedinIcon} alt="" />
                </div>
                <div className="info__side-figure">
                    <img src={figureIcon} alt="" />
                </div>
            </div>
        </div>
        <div className="info__content">
            <div className="info__content-col">
                <img src={figureInfo1} alt="" style={{ marginBottom: "1.875rem" }} />
                <div>
                    <h3>¿Dónde?</h3>
                    <p>El evento se realizara en el Centro Comercial Monterrey en la ciudad de Medellín / Colombia.</p>
                </div>
                <div>
                    <h3>¿Cuándo?</h3>
                    <p>El día 12 de junio desde las 10am hasta las 6pm.</p>
                </div>
                <div>
                    <h3>¿Quién puede participar?</h3>
                    <p>Ingenieros, programadores, diseñadores, comunicadores, analistas de datos y muchos más perfiles.</p>
                </div>
                <div className="info__figure-icon">
                    <img src={figureIcon4} alt="figure" style={{ maxWidth: "69px", marginTop: "1.875rem" }} />
                </div>
            </div>
            <div className="info__content-col">
                <div className="info__content-text">
                    <h3>¿Porqué una Hackathon?</h3>
                    <p>Al organizar una Hackathon, buscamos impulsar la resolución de problemas de manera ágil y eficiente, promoviendo la experimentación y el pensamiento fuera de lo común. </p>
                    <div className="info__figure-text">
                        <img src={figureIcon4} alt="figure" style={{ maxWidth: "69px", marginTop: "1.875rem" }} />
                        <p className="info__content-text--mobile">Nuestro objetivo es desafiar a los participantes a superar sus límites, explorar nuevas tecnologías y trabajar en equipo para crear proyectos innovadores que puedan impactar positivamente en nuestra empresa y en la industria en general.</p>
                    </div>
                </div>
                <div className="info__content-figure">
                    <img className="info__figure" src={figureBox} alt="box-figure" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Info