import "./styles.scss";
import {TextDetails} from "../../data";


function Details() {
  return (
    <section className="details">

        <article className="details__content">
            <h2 className="details__content-title">{TextDetails.title} </h2>

            <div className="details__content-cards">
                    {
                            TextDetails.cards.map((item)=>{
                                return( <div className="details__content-cards-card">
                                            <img src={item.icon} className="details__content-cards-card-icon" alt="icon"/>
                                            <h3 className="details__content-cards-card-title">{item.title}</h3>
                                            <p className="details__content-cards-card-desc">{item.desc}</p>
                                        </div> );
                                })
                    }
            </div>
        </article>

    </section>
  )
}

export default Details