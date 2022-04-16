import "./styles.scss";
import { DataGuarantee } from "../../data";


const Guarantee = () => {

  const TITLE = DataGuarantee[0].title;
    

  return (
    <section className="guarantee">

        <article className="guarantee__container">
            <div className="guarantee__container content">
                <img src="" alt="" className="content__img" />
                <div className="content__desc">
                    <h3 className="content__desc-subtitle"></h3>
                    <h2 className="content__desc-title"></h2>
                    <p className="content__desc-text"></p>
                    <p className="content__desc-text"></p>
                </div>
            </div>
        </article>

    </section>
  )
}

export default Guarantee