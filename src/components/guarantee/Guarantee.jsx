import "./styles.scss";
import { DataGuarantee } from "../../data";
import SmallWave from "../smallWave/SmallWave";

const DATA= DataGuarantee;
const COLOR1 = "#E78AA4";

const Guarantee = () => {
 
  return (
    <section className="guarantee">

        <article className="guarantee__container">

              <div className="guarantee__container content">

                    <div className="content__desc">
                        <h3 className="content__desc-subtitle">{DATA.subtitle}</h3>
                        <h2 className="content__desc-title">{DATA.title}</h2>
                        <SmallWave width="80px" color={COLOR1}/>
                        <p className="content__desc-text">{DATA.desc1}</p>
                        <p className="content__desc-text">{DATA.desc2}</p>
                    </div>

                    <img src={DATA.img} alt={DATA.alt} className="content__img" />

              </div>

        </article>

    </section>
  )
}

export default Guarantee