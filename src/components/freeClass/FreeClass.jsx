import "./styles.scss";
import { DataFreeClass } from "../../data";
import Button from "../button/Button";
import SmallWave from "../smallWave/SmallWave";

const COLOR = "#420e1f";

const FreeClass = () => {


 const TITLE = DataFreeClass.title;
 const SUBTITLE = DataFreeClass.subtitle;
 const TEXTBUTTON = DataFreeClass.button;
    
  return (
    <section className="freeClass">

       <article className="freeClass__container">
            <div className="freeClass__container content">

                <h2 className="content__title" data-aos="fade-zoom-in" >{TITLE}</h2>
                <h3 className="content__subtitle">{SUBTITLE}</h3>
                <SmallWave width={122} color={COLOR}/>

                <iframe
                className="content__video"
                src="https://www.youtube.com/embed/9z6dp8gv2NU" 
                title="YouTube video player" 
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                >
                </iframe>

                <Button>{TEXTBUTTON}</Button>

            </div>
       </article>

    </section>
  )

}

export default FreeClass