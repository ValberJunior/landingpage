import "./styles.scss";
import { DataGuarantee } from "../../data";
import SmallWave from "../smallWave/SmallWave";


const Guarantee = () => {

  const TITLE = DataGuarantee[0].title;
  const SUBTITLE =  DataGuarantee[0].subtitle;
  const DESC1 = DataGuarantee[0].desc1;
  const DESC2 = DataGuarantee[0].desc2;
  const IMG = DataGuarantee[0].img;
  const ALT = DataGuarantee[0].alt;
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