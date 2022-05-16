import WavesDividerTop from "../wavesDivider/WavesDividerTop";
import Button from "../button/Button";
import { DataPromotion } from "../../data";
import "./styles.scss";

const COLOR = "#E8E8E8";
const DATA = DataPromotion;

const Promotion = () => {
  return (
    <section className="promotion">
    <WavesDividerTop  width={100} color={COLOR}/>

       <article className="promotion__container">
           <div className="promotion__container-content content">
           <h2 className="content__title" data-aos="zoom-in" >{DATA.title}</h2>
                <ul className="content__list list">
                        {
                            DATA.options.map((item)=>{
                                return(
                                    <li  key={item.id} className="list__item"><i className="fa-solid fa-check list__item-indicator"></i> {item.option}</li>
                                )
                            })
                        }
                </ul>
           <span className="content__oldprice">{DATA.oldprice}</span>
           <span className="content__price">{DATA.price}</span>
           <span className="content__price2">{DATA.price2}</span>

           <a href={DATA.url}>
              <Button>{DATA.button}</Button>
            </a>
            
           <img src={DATA.logos} alt={DATA.alt} className="content__img" loading="lazy"/>
           </div>
       </article>

    </section>
  )
}

export default Promotion