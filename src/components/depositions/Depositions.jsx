import "./styles.scss";
import BannerEspecial from "../../assets/bgespecial.png";
import { TextDepositions } from "../../data"; 
import Image1 from "../../assets/1DU.png";
import Image2 from "../../assets/3DU.png";
import Image3 from "../../assets/2DU.png";
import Image4 from "../../assets/4DU.png";



const Depositions = () => {
  return (
    <section className="depositions">
        <img src={BannerEspecial} alt="" className="depositions__banner" />
        <article class="depositions__desc">
            <div className="depositions__desc-content">
                
                <h2 className="depositions__desc-content-title">{TextDepositions.title}</h2>
                <h3 className="depositions__desc-content-subtitle">{TextDepositions.subtitle}</h3> 

                <div className="depositions_desc-images">
                    <img src={Image1} alt="" className="depositions_desc-images-image" />
                    <img src={Image2} alt="" className="depositions_desc-images-image" />
                    <img src={Image3} alt="" className="depositions_desc-images-image" />
                    <img src={Image4} alt="" className="depositions_desc-images-image" />
                </div>  

            </div>
        </article>
    </section>
  )
}

export default Depositions