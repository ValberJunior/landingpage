import WavesSVG from "../../assets/wavesOpacityBranco.svg";
import "./styles.scss";

const Waves = ({height}) => {
  return (
    <img src={WavesSVG} className="divider" alt="Divider PNG" height={height}/>
  )
}

export default Waves