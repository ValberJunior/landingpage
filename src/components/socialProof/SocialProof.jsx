import "./styles.scss";
import { DataSocialProof } from "../../data";

import React from 'react'

const SocialProof = () => {

 const TITLE = DataSocialProof.title;   
 const SUBTITLE = DataSocialProof.subtitle;
 const CARDS =  DataSocialProof.cards;

  return (
    <section className="socialProof">

        <article className="socialProof__content">

            <h2 className="socialProof__content-title">{TITLE}</h2>
            <h3 className="socialProof__content-subtitle">{SUBTITLE}</h3>

            <div className="socialProof__content-cards">
                    {
                        CARDS.map((card)=>{
                            return (
                                                <div className="card__body-cards card" key={card.id}>
                                                    <img src={card.image} alt={card.alt} className="card__img"/>
                                                </div>
                                    )
                        })
                    }
             </div>

        </article>

    </section>
  )
}

export default SocialProof