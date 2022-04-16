import "./styles.scss";
import { DataFreeClass } from "../../data";
import Button from "../button/Button";
import SmallWave from "../smallWave/SmallWave";

const COLOR = "#420e1f";

const FreeClass = () => {


 const TITLE = DataFreeClass[0].title;
 const SUBTITLE = DataFreeClass[0].subtitle;
 const TEXTBUTTON = DataFreeClass[0].button;
    
  return (
    <section className="freeClass">

        <article className="freeClass__content">

                <h2 className="freeClass__content-title">{TITLE}</h2>
                <h3 className="freeClass__content-subtitle">{SUBTITLE}</h3>
                <SmallWave width="122px" color={COLOR}/>

                <iframe width="876" height="493"
                className="freeClass__content-video"
                src="https://www.youtube.com/embed/9z6dp8gv2NU" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture">
                </iframe>

                <Button>{TEXTBUTTON}</Button>

        </article>

    </section>
  )

}

export default FreeClass