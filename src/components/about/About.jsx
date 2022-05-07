import "./styles.scss";
import {DataAbout} from "../../data";

const DATA = DataAbout;

const About = () => {
  return (
    <section className="about">

        <article className="about__content">

            <figure className="about__content-image .image">
                <img src={DATA.img} alt={DATA.alt} className="image__icon"/>
            </figure>

            <div className="about__content-desc .desc">
                <span className="desc__subtitle">{DATA.subtitle}</span>
                <h2 className="desc__title">{DATA.title}</h2>
                <p className="desc__desc">{DATA.desc}</p>
                <p className="desc__desc">{DATA.desc2}</p>
            </div>

        </article>
        
    </section>
  )
}

export default About