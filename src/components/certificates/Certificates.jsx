import "./styles.scss";
import SmallWave from "../smallWave/SmallWave";
import { DataCertificates } from "../../data";


const COLOR = "#420e1f";

const Certificates = () => {
 
    const TITLE = DataCertificates[0].title;
    const DESC = DataCertificates[0].desc;
    const SEAL = DataCertificates[0].seal;
    const ALTSEAL = DataCertificates[0].altseal;
    const CERTF = DataCertificates[0].certificates;
    const ALTCERTF = DataCertificates[0].altcertificates;

  return (
    <section className="certificates">
        <article className="certificates__content">
                <h2 className="certificates__content-title">{TITLE}</h2>
                <p className="certificates__content-desc">{DESC}</p>
                <img src={SEAL} alt={ALTSEAL} className="certificates__content-seal"/>
                <SmallWave width="82px" color={COLOR}/>
                <img src={CERTF} alt={ALTCERTF} className="certificates__content-images"/>
        </article>
    </section>
  )
}

export default Certificates