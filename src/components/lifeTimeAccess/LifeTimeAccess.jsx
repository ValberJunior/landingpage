import "./styles.scss";
import { DataLifetimeAccess } from "../../data";


const LifeTimeAccess = () => {

const TITLE = DataLifetimeAccess[0].title;
const ALT = DataLifetimeAccess[0].alt;
const IMG = DataLifetimeAccess[0].img;
const SUBTITLE = DataLifetimeAccess[0].subtitle;
const DESC1 = DataLifetimeAccess[0].desc1;
const DESC2 = DataLifetimeAccess[0].desc2;


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