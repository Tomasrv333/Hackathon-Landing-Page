
const Banner = () => {
  return (
    <div className='banner'>
        <div className="banner__vertical">
            <p className="banner__vertical-hashtag">#HackathonTaxisLibres</p>
            <p className="banner__vertical-text">Hackathon.</p>
            <img className="banner__vertical-line" src="src/assets/Linea.svg" alt="" />
        </div>
        <div className="banner__info">
            <span className="banner__info-span">¡Convierte tus ideas en innovación!</span>
            <h1>Hackathon 2023</h1>
            <div>

            </div>
            <p className="banner__info-text">¡La Hackathon es el escenario perfecto para poner a prueba la creatividad y lograr llevar las ideas al siguiente nivel!</p>
            <button className="btn--primary">Participa Ya!</button>
        </div>
    </div>
  )
}

export default Banner