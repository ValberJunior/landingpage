import { DataSubjects } from "../../data";
import Waves from "../waves/Waves";
import "./styles.scss";

const DATA = DataSubjects[0];
const CARDS = DATA.cards;

const Subjects = () => {

  return (
    <section className="subjects">

        <article className="subjects__content">

                <h2 className="subjects__content-title">{DATA.title}</h2>
                <h3 className="subjects__content-subtitle">{DATA.subtitle}</h3>

                {/* Subjects */}

                <div className="subjects__content-cards">
                {
                    CARDS.map((card)=>{
                        return(

                            <div key={card.id} className="subjects__content-cards card">
                                <img src={card.icon} alt="" className="card__img"/>
                                <h3 className="card__desc">{card.legend}</h3>
                            </div>

                            )
                    })
                }
                </div>


                <h4 className="subjects__content-titlefooter">{DATA.titlefooter}</h4>

        </article>
        <Waves/>
    </section>
  )
}

export default Subjects;