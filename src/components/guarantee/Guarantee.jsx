import "./styles.scss";
import { DataGuarantee } from "../../data";
import SmallWave from "../smallWave/SmallWave";


const Guarantee = () => {

  const TITLE = DataGuarantee.title;
  const SUBTITLE =  DataGuarantee.subtitle;
  const DESC1 = DataGuarantee.desc1;
  const DESC2 = DataGuarantee.desc2;
  const IMG = DataGuarantee.img;
  const ALT = DataGuarantee.alt;
  const COLOR1 = "#E78AA4";
     

  return (
    <section className="guarantee">

        <article className="guarantee__container">

              <div className="guarantee__container content">

                    <div className="content__desc">
                        <h3 className="content__desc-subtitle">{SUBTITLE}</h3>
                        <h2 className="content__desc-title">{TITLE}</h2>
                        <SmallWave width="80px" color={COLOR1}/>
                        <p className="content__desc-text">{DESC1}</p>
                        <p className="content__desc-text">{DESC2}</p>
                    </div>

                    <img src={IMG} alt={ALT} className="content__img" />

              </div>

        </article>

    </section>
  )
}

export default Guarantee