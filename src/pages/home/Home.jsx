import { Header, About,Depositions, Details, Subjects, Bonus, FreeClass, SocialProof, Certificates, LifeTimeAccess, Garantee, Promotion, Footer} from "../../components";
import "./styles.scss"

//animation
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";


const scrollToTop = () =>{
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'

  });
};


const Home = () => {

    const [visible, setVisible] = useState(false)

        //animation
        useEffect(()=>{
          Aos.init({duration: 2000});
        },[])
    
    const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 800){
      setVisible(true)
    } 
    else if (scrolled <= 800){
      setVisible(false)
    }
  };

  window.addEventListener('scroll', toggleVisible);

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
    <button onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} className="top">
    <i className="fa-solid fa-arrow-up"></i>
    </button>
    </>
  )
}

export default Home