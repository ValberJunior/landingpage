import "./styles.scss";
import { DataDepositions } from "../../data"; 
import DividerTiltBottom from "../divider/DividerTiltBottom";




const DATA = DataDepositions;
const IMAGES = DATA.images;

const Depositions = () => {


  return (
    <section className="sectionDepositions">
    
        <article className="depositions">

              <div className="depositions__container">
                    <div className="depositions__container-content">
                        
                        <h2 className="depositions__container-content title" data-aos="fade-zoom-in">{DATA.title}</h2>
                        <h3 className="depositions__container-content subtitle">{DATA.subtitle}</h3> 

                        <div className="depositions__container-images images">
                            {
                              IMAGES.map((image)=>{
                                return(
                                  <img src={image.img} alt={image.alt} className="images__img" key={image.id} data-aos="fade-zoom-in"/>
                                )
                              })
                            }
                        </div>  

                    </div>
              </div>
        </article>
        
      <DividerTiltBottom/>
    </section>
  )
}

export default Depositions