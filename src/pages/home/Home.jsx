import { Header, About,Depositions, Details, Subjects, Bonus, FreeClass, SocialProof, Certificates, LifeTimeAccess, Garantee, Promotion} from "../../components";
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
    <Garantee/>
    <Promotion/>
    </div>
  )
}

export default Home