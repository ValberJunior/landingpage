import "./styles.scss"
// import Logo from '../../assets/logo.png';
import Animation from "../../assets/loading.gif";

const Modal = () => {
  return (
   <section className="loading">
            {/* <img src={Logo} className="loading__img" alt="logo curso design de unhas"/> */}
            <img src={Animation} className="loading__animation"  alt="loading ... "/>

   </section>
  )
}

export default Modal