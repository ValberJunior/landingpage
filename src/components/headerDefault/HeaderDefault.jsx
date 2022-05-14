import "./styles.scss";
import { DataHeader} from "../../data";
import WavesDividerBottom from "../wavesDivider/WavesDividerBottom";
import { Link } from "react-router-dom";


const COLOR = "#FFFFFF";
const DATA = DataHeader;

const HeaderDefault = () => {

 return (
    <header className="headerDefault">
        
        <div className="headerDefault__wrapper">

            <div className="headerDefault__wrapper-logo .logo">
                <Link to="/">
                    <img src={DATA.logo} alt={DATA.alt} arial-label="Logo do Curso" className="logo__img"/>
                </Link>
            </div>

        </div>

        <WavesDividerBottom width={100} color={COLOR} />
        
    </header>
  )
}

export default HeaderDefault