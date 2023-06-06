import figureInfo2 from "../../assets/figures/figureInfo2.svg";
import Clock from "../../components/Countdown";

const Banner = () => {
    let deadline = "June, 10, 2023";

  return (
    <div id="banner" className='d-flex'>
        <div className="banner__side">
            <div className="banner__side-content">
                <div className="banner__side-hashtag">
                    <p>#HackathonTaxisLibres</p>
                </div>
                <div className="banner__side-text">
                    <p>Hackathon.</p>
                </div>
            </div>
        </div>
        <div className="banner__info">
            <span className="banner__info-span">¡Convierte tus ideas en innovación!</span>
            <h1>Hackathon 2023</h1>
            <div className="banner__info-gadgets d-flex justify-content-between">
                <div className="d-flex gap-3" >
                    <img src="src/assets/icons/Location.svg" alt="" />
                    <div>
                        <p className="m-0">Medellín / Colombia</p>
                        <p className="m-0">Fecha: 10 / 06 / 2023</p>
                    </div>
                </div>
                <div className="banner__info-gadgets--desktop">
                    <Clock deadline={deadline} />
                </div>
            </div>
            <p className="banner__info-text">¡La Hackathon es el escenario perfecto para poner a prueba la creatividad y lograr llevar las ideas al siguiente nivel!</p>
            <div className="banner__info-gadgets--mobile">
                <Clock deadline={deadline} />
            </div>
            <button className="btn--primary" style={{ marginBottom: "1.875rem" }}><a style={{ border: "none" }} href="#form">Inscribete gratis!</a></button>
            <div className="banner__info-figure--mobile">
                <img src={figureInfo2} alt="" />
            </div>
        </div>
        <div className="banner__vector">
            <img className="banner__vector-taxi" src="src/assets/TaxiBanner.svg" alt="taxi" />
        </div>
    </div>
  )
}

export default Banner