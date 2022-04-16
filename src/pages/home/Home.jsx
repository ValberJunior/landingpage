import { Header, About,Depositions, Details, Subjects, Bonus, FreeClass, SocialProof} from "../../components";
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
    <SocialProof/>

    </div>
  )
}

export default Home