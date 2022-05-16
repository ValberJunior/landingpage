import "./styles.scss";
import { DataLifetimeAccess } from "../../data";


const LifeTimeAccess = () => {

const DATA = DataLifetimeAccess;

  return (
    <section className="lifeTimeAccess">

    <article className="lifeTimeAccess__container">

        <div className="lifeTimeAccess__container content">

            <img src={DATA.img} alt={DATA.alt} className="content__img" loading="lazy"/>

            <div className="content__desc">
                <h3 className="content__desc-subtitle">{DATA.subtitle}</h3>
                <h2 className="content__desc-title">{DATA.title}</h2>
                <p className="content__desc-text">{DATA.desc1}</p>
                <p className="content__desc-text">{DATA.desc2}</p>
            </div>

        </div>

    </article>

    </section>
  )
}

export default LifeTimeAccess