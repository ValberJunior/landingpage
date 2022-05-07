import "./styles.scss";
import {DataDetails} from "../../data";

const DATA = DataDetails;

function Details() {
  return (
    <section className="details">

        <article className="details__content">
            <h2 className="details__content-title" data-aos="fade-zoom-in">{DATA.title} </h2>

            <div className="details__content-cards .card">
                    {
                            DATA.cards.map((item)=>{
                                return( <div className="card__body" key={item.id} data-aos="zoom-in">
                                            <img src={item.icon} className="card__body-icon" alt={item.alt}/>
                                            <h3 className="card__body-title">{item.title}</h3>
                                            <p className="card__body-desc">{item.desc}</p>
                                        </div> );
                                })
                    }
            </div>
        </article>

    </section>
  )
}

export default Details