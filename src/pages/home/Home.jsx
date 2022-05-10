import { useEffect, useState } from "react";
import { Header, About,Depositions, Details, Subjects, Bonus, FreeClass, SocialProof, Certificates, LifeTimeAccess, Garantee, Promotion, Footer, Modal} from "../../components";
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

    const [isLoading, setIsLoading] = useState(true);
    const [visible, setVisible] = useState(false)

        //animation
        useEffect(()=>{
          setTimeout(()=>{
            setIsLoading(false)
          },2500);
          Aos.init({duration: 2500});
        },[]);
    
        const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 800){
          setVisible(!isLoading);

        } 
        else if (scrolled <= 800){
          setVisible(false)
        }
      };

      window.addEventListener('scroll', toggleVisible);


  return (
    <>
          
          {isLoading?
           (<Modal style={{display: isLoading ? 'inline' : 'none'}} />)
           :
                (
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
                  </>)
          }
    </>
  )
}

export default Home