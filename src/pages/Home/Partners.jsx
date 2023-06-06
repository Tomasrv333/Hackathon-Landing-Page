import figureLines from "../../assets/figures/partnersLines--mobile.svg";
import partnersIcons from "../../assets/icons/iconPartners--mobile.svg";
import partnerLogoIBM from "../../assets/icons/partners/logoPartnerIbm.svg";
import partnerLogoUandes from "../../assets/icons/partners/logoPartnerUandes.svg";
import partnerLogoPlatzi from "../../assets/icons/partners/logoPartnerPlatzi.svg";
import partnerLogoCrediban from "../../assets/icons/partners/logoPartnerCrediban.svg";
import partnerLogoHuaw from "../../assets/icons/partners/logoPartnerHuaw.svg";
import partnerLogoAlMed from "../../assets/icons/partners/logoPartnerAlmed.svg";

const Partners = () => {
  return (
    <div id="partners" className="partners">
      <h2 className="mx-auto" style={{ marginBottom: "1.875rem" }}>Conóce a nuestros aliados y patrocinadores!</h2>
        <div className="partners__content">
            <img src={partnerLogoIBM} alt="IBM" />
            <img src={partnerLogoUandes} alt="Universidad de los andes" />
            <img src={partnerLogoPlatzi} alt="Platzi" />
            <img src={partnerLogoCrediban} alt="CredibanCo" />
            <img src={partnerLogoHuaw} alt="Huawei" />
            <img src={partnerLogoAlMed} alt="Alcaldia de Medellín" />
        </div>
        <div className="partners__content--mobile">
          <img src={partnersIcons} alt="" />
        </div>
        <div>
          <img src={figureLines} alt="" />
        </div>
    </div>
  )
}

export default Partners