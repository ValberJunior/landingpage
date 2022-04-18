import "./styles.scss";
import { DataDepositions } from "../../data"; 
import SmallWave from "../smallWave/SmallWave";
import DividerTop from "../divider/DividerTop";
import DividerBottom from "../divider/DividerBottom";

const DATA = DataDepositions;
const IMAGES = DATA.images;
const COLOR = "#420e1f";

const Depositions = () => {


  return (
    <section>

        <article className="depositions">

              <div class="depositions__container">
                    <div className="depositions__container-content">
                        
                        <h2 className="depositions__container-content title">{DATA.title}</h2>
                        <h3 className="depositions__container-content subtitle">{DATA.subtitle}</h3> 
                        <SmallWave width="122px" color={COLOR}/>

                        <div className="depositions__container-images images">
                            {
                              IMAGES.map((image)=>{
                                return(
                                  <img src={image.img} alt={image.alt} className="images__img" key={image.id}/>
                                )
                              })
                            }
                        </div>  

                    </div>
              </div>
              
        </article>

    </section>
  )
}

export default Depositions