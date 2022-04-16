import { Header, About,Depositions, Details, Subjects, Bonus, FreeClass} from "../../components";
import "./styles.scss"

const Home = () => {
  return (
    <div className="wrapper">
    <Header/>
    <About/>
    <Depositions/>
    <Details/>
    <Subjects/>
    <Bonus/>
    <FreeClass/>

    </div>
  )
}

export default Home