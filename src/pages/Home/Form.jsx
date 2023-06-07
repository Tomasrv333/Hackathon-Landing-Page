import backgroundForm from "../../assets/figures/formBackground.svg";

const Form = () => {
  return (
    <div id="form" style={{ backgroundImage: `url(${backgroundForm})` }}>
        <h2 style={{ marginBottom: "1.875rem" }}>Formulario de inscripción</h2>
        <form action="">
            <div className="form__input--mobile d-flex justify-content-between" style={{ gap: "1.875rem" }}>
                <div className="d-flex flex-column">
                    <label htmlFor="nombre">Nombre</label>
                    <input id="name" type="text" />

                </div>
                <div className="d-flex flex-column">
                    <label htmlFor="apellido">Apellido</label>
                    <input id="apellido" type="text" />
                </div>
            </div>
            
            <label htmlFor="correo">Correo electronico</label>
            <input id="correo" type="text" />

            <label htmlFor="telefono">Número de telefono (Opcional)</label>
            <input id="telefono" type="text" />

            <label htmlFor="perfil">Cuál es tu perfil?</label>
            <input id="perfil" type="text" />

            <div className="form__checkbox d-flex gap-3" style={{ alignItems: "center", marginBottom: "3.75rem" }}>
                <input className="m-0" type="checkbox"/>
                <p className="m-0" style={{ opacity: "70%" }}>Quiero seguir recibiendo actualizaciones de la Hackathon a mi correo electronico.</p>
            </div>

            <button className="form__btn btn--primary mx-auto">Inscribirme</button>
        </form>
    </div>
  )
}

export default Form