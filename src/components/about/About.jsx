import "./styles.scss";
import Image from "../../assets/Ativo-1.png";
import {TextAbout} from "../../data";


const About = () => {
  return (
    <section className="about">

        <article className="about__content">

            <figure className="about__content-image">
                <img src={Image} alt="Ilustração de Manicure" className="about__content-image-icon"/>
            </figure>

            <div className="about__content-desc">
                <span className="about__content-desc-subtitle">{TextAbout.subtitle}</span>
                <h2 className="about__content-desc-title">{TextAbout.title}</h2>
                <p className="about__content-desc-desc">{TextAbout.desc}</p>
                <p className="about__content-desc-desc">{TextAbout.desc2}</p>
            </div>

        </article>
        
    </section>
  )
}

export default About