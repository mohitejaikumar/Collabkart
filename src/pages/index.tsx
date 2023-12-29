
import Typewriter from "typewriter-effect"

export default function MainPage() {
    
    return (
        <div className="landing-page">
            <div className="main-content">
              <Typewriter
              onInit={
                (typewriter)=>{
                    typewriter.typeString("Revolutionize Your Brand's Impact with Effortless Influencer Marketing! Unleash the Power of Collaboration – Simply Share the Link of Your Ideal Influencer, and Let Us Transform Your Campaign Dreams into Reality! ")
                    .changeDelay(1)
                    .start();
                }
              }
              
              ></Typewriter>
            </div>
        </div>
    )
}