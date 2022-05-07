import { Header, About,Depositions, Details, Subjects, Bonus, FreeClass, SocialProof, Certificates, LifeTimeAccess, Garantee, Promotion, Footer} from "../../components";
import "./styles.scss"

//animation
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Home = () => {

        //animation
        useEffect(()=>{
          Aos.init({duration: 2000});
        },[])
    

  return (
    <>
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
    <Footer/>
    </>
  )
}

export default Home