import { useEffect, useState } from "react";
import { Header, About,Depositions, Details, Subjects, Bonus, FreeClass, SocialProof, Certificates, LifeTimeAccess, Garantee, Promotion, Footer} from "../../components";
import "./styles.scss";

//animation
import Aos from "aos";
import "aos/dist/aos.css";


//scroll function
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
          Aos.init({duration: 2500});
        },[]);
    
        const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 800){
          setVisible(true);

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
      <button
        onClick={(e)=>{scrollToTop()}}
        style={{display: visible ? 'inline' : 'none'}}
        className="top">
          <i className="fa-solid fa-chevron-up"></i>
      </button>

    </>
  )
}

export default Home