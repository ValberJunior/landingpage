import "./styles.scss";
import { Button } from "../../components";
import { DataHeader} from "../../data";
import WavesDividerBottom from "../wavesDivider/WavesDividerBottom";



const COLOR = "#FFFFFF";
const DATA = DataHeader;

const Header = () => {

 return (
    <header className="header">
        
        <div className="header__wrapper">

            <div className="header__wrapper-logo .logo">
                <img src={DATA.logo} alt={DATA.alt} arial-label="Logo do Curso" className="logo__img" loading="lazy"/>
            </div>

            <div className="header__wrapper-description description">
                <div className="description__text">

                 <h2 className="description__text-title">{DATA.title}</h2>
                 <p className="description__text-desc">{DATA.desc}</p>

                <a href={DATA.url}>
                    <Button>
                        {DATA.button}
                      </Button>
                </a>

                </div>

                <iframe className="description__video"
                 src="https://www.youtube.com/embed/6ggxcAidO28"
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  loading="lazy"
                 >
                </iframe>
        

            </div>

        </div>

        <WavesDividerBottom width={100} color={COLOR} />
        
    </header>
  )
}

export default Header