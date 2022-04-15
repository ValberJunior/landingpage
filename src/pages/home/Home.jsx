import { Header, About,Depositions, Details, Subjects} from "../../components";
import "./styles.scss"

const Home = () => {
  return (
    <div className="wrapper">
    <Header/>
    <About/>
    <Depositions/>
    <Details/>
    <Subjects/>

    </div>
  )
}

export default Home