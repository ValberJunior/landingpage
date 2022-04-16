import { Header, About,Depositions, Details, Subjects, Bonus, FreeClass, SocialProof, Certificates, LifeTimeAccess} from "../../components";
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
    <Certificates/>
    <LifeTimeAccess/>

    </div>
  )
}

export default Home