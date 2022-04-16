import "./styles.scss";
import { DataBonus } from "../../data";

const Bonus = () => {

  const TITLE = DataBonus[0].title;
  const CARDS = DataBonus[0].cards;

  return (
    <section className="bonus">

          <article className="bonus__content">
                
                <h2 className="bonus__content-title">{TITLE}</h2>

                <div className="bonus__content-cards">

                    {
                      CARDS.map((card)=>{
                        return(
                                <div className="bonus__content-cards card" key={card.id}>
                                    <img src={card.icon} alt="icone de Bonus" className="card__img"/>
                                    <h3 className="card__title">{card.title}</h3>
                                    <h4 className="card__subtitle">{card.subtitle}</h4>
                                    <p className="card__desc">{card.desc}</p>
                                </div>
                              )
                      })
                    }

                </div>

          </article>

    </section>
  )
}

export default Bonus