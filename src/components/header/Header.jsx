import "./styles.scss";
import Logo from "../../assets/logoUnhas.png";
import { Button } from "../../components";
import { Text } from "../../data";
import WavesDividerBottom from "../wavesDivider/WavesDividerBottom";

const COLOR = "#FFFFFF";

const Header = () => {

 return (
    <header className="header">
        
        <div className="header__wrapper">

            <div className="header__logo">
                <img src={Logo} alt="Logo Unhas" arial-label="Logo do Curso" className="header__logo-img"/>
            </div>

            <div className="header__description">
                <div className="header__description-text">

                 <h2 className="header__description-text-title">{Text.title}</h2>
                 <p className="header__description-text-desc">{Text.desc}</p>

                  <Button>
                    {Text.button}
                  </Button>

                </div>

                <iframe className="header__video"
                width="536" height="302" src="https://www.youtube.com/embed/6ggxcAidO28"
                title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                </iframe>
        

            </div>

        </div>

        <WavesDividerBottom width="100vw" height="120" color={COLOR} />
        
    </header>
  )
}

export default Header