import "./styles.scss";
import { DataLifetimeAccess } from "../../data";


const LifeTimeAccess = () => {

const TITLE = DataLifetimeAccess.title;
const ALT = DataLifetimeAccess.alt;
const IMG = DataLifetimeAccess.img;
const SUBTITLE = DataLifetimeAccess.subtitle;
const DESC1 = DataLifetimeAccess.desc1;
const DESC2 = DataLifetimeAccess.desc2;


  return (
    <section className="lifeTimeAccess">

    <article className="lifeTimeAccess__container">

        <div className="lifeTimeAccess__container content">

            <img src={IMG} alt={ALT} className="content__img" />

            <div className="content__desc">
                <h3 className="content__desc-subtitle">{SUBTITLE}</h3>
                <h2 className="content__desc-title">{TITLE}</h2>
                <p className="content__desc-text">{DESC1}</p>
                <p className="content__desc-text">{DESC2}</p>
            </div>

        </div>

    </article>

    </section>
  )
}

export default LifeTimeAccess