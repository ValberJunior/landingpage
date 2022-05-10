import { Link } from "react-router-dom";
import "./styles.scss"


const ButtonHome = () => {
  return (
   <Link to="/">
        <button
        className="home">
            <i className="fa-solid fa-house"></i>
      </button>
    </Link>
  )
}

export default ButtonHome;