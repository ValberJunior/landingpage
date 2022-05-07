import "./styles.scss";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">

        <section className="footer__container content">

            <div className="content__links">

                <Link className="content__links-link" to="/termos">Termos de Uso</Link>
                <Link className="content__links-link" to="/privacidade">Políticas de privacidade</Link>
            </div>

            <span className="content__copyright">© Escola de Design de Unhas - Todos os Direitos Reservados - Por Valber Júnior</span>

        </section>
       
    </footer>
  )
}

export default Footer