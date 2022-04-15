import { Header, About,Depositions, Details} from "../../components";
import "./styles.scss"

const Home = () => {
  return (
    <div className="wrapper">
    <Header/>
    <About/>
    <Depositions/>
    <Details/>

    </div>
  )
}

export default Home