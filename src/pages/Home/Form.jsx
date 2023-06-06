
const Form = () => {
  return (
    <div id="form">
        <h2 style={{ marginBottom: "1.875rem" }}>Formulario de inscripción</h2>
        <form action="">
            <div className="form__input--mobile d-flex justify-content-between" style={{ gap: "1.875rem" }}>
                <div className="d-flex flex-column">
                    <label htmlFor="">Nombre</label>
                    <input type="text" />

                </div>
                <div className="d-flex flex-column">
                    <label htmlFor="">Apellido</label>
                    <input type="text" />
                </div>
            </div>
            
            <label htmlFor="">Correo electronico</label>
            <input type="text" />

            <label htmlFor="">Número de telefono (Opcional)</label>
            <input type="text" />

            <label htmlFor="">Cuál es tu perfil?</label>
            <input type="text" />

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