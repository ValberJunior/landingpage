import "./styles.scss";
import SmallWave from "../smallWave/SmallWave";
import { DataCertificates } from "../../data";
import DividerTop from "../divider/DividerTop";
import DividerBottom from "../divider/DividerBottom";


const COLOR = "#420e1f";

const Certificates = () => {
 
    const DATA = DataCertificates;


  return (
      <section className="certificates">
        <DividerTop/>

           <article className="certificates__container">
                <div className="certificates__container content">
                        <h2 className="content__title">{DATA.title}</h2>
                        <p className="content__desc">{DATA.desc}</p>
                        <img src={DATA.seal} alt={DATA.altseal} className="content__seal"/>
                        <SmallWave width="82px" color={COLOR}/>
                        <img src={DATA.certificates} alt={DATA.altcertificates} className="content__images"/>
                </div>
          </article>

          <DividerBottom />
      </section>
  )
}

export default Certificates