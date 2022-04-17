import "./styles.scss";
import { DataFreeClass } from "../../data";
import Button from "../button/Button";
import SmallWave from "../smallWave/SmallWave";
import DividerTop from "../divider/DividerTop";
import DividerBottom from "../divider/DividerBottom";

const COLOR = "#420e1f";

const FreeClass = () => {


 const TITLE = DataFreeClass.title;
 const SUBTITLE = DataFreeClass.subtitle;
 const TEXTBUTTON = DataFreeClass.button;
    
  return (
    <section className="freeClass">
      <DividerTop/>

       <article className="freeClass__container">
            <div className="freeClass__container content">

                <h2 className="content__title">{TITLE}</h2>
                <h3 className="content__subtitle">{SUBTITLE}</h3>
                <SmallWave width="122px" color={COLOR}/>

                <iframe
                className="content__video"
                src="https://www.youtube.com/embed/9z6dp8gv2NU" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture">
                </iframe>

                <Button>{TEXTBUTTON}</Button>

            </div>
       </article>

      <DividerBottom/>
    </section>
  )

}

export default FreeClass