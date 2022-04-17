import "./styles.scss";
import SmallWave from "../smallWave/SmallWave";
import { DataCertificates } from "../../data";
import DividerTop from "../divider/DividerTop";
import DividerBottom from "../divider/DividerBottom";


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
        <DividerTop/>

           <article className="certificates__container">
                <div className="certificates__container content">
                        <h2 className="content__title">{TITLE}</h2>
                        <p className="content__desc">{DESC}</p>
                        <img src={SEAL} alt={ALTSEAL} className="content__seal"/>
                        <SmallWave width="82px" color={COLOR}/>
                        <img src={CERTF} alt={ALTCERTF} className="content__images"/>
                </div>
          </article>

          <DividerBottom />
      </section>
  )
}

export default Certificates