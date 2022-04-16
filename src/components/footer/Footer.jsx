import "./styles.scss";

const Footer = () => {
  return (
    <footer className="footer">

        <section className="footer__container content">

            <div className="content__links">
                <a href="#" className="content__links-link">Termos de Uso</a>
                <a href="#" className="content__links-link">Políticas de privacidade</a>
            </div>

            <span className="content__copyright">© Escola de Design de Unhas - Todos os Direitos Reservados - Por Valber Júnior</span>

        </section>
       
    </footer>
  )
}

export default Footer