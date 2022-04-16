import "./styles.scss";
import { TextDepositions } from "../../data"; 

import Image1 from "../../assets/1DU.png";
import Image2 from "../../assets/3DU.png";
import Image3 from "../../assets/2DU.png";
import Image4 from "../../assets/4DU.png";
import SmallWave from "../smallWave/SmallWave";


const COLOR = "#420e1f";

const Depositions = () => {


  return (
    <section className="depositions">

        <article class="depositions__desc">
            <div className="depositions__desc-content">
                
                <h2 className="depositions__desc-content-title">{TextDepositions.title}</h2>
                <h3 className="depositions__desc-content-subtitle">{TextDepositions.subtitle}</h3> 
                <SmallWave width="122px" color={COLOR}/>

                <div className="depositions__desc-images">
                    <img src={Image1} alt="" className="depositions__desc-images-image" />
                    <img src={Image2} alt="" className="depositions__desc-images-image" />
                    <img src={Image3} alt="" className="depositions__desc-images-image" />
                    <img src={Image4} alt="" className="depositions__desc-images-image" />
                </div>  

            </div>
        </article>
    </section>
  )
}

export default Depositions