import { getServerSession } from "next-auth";
import Typewriter from "typewriter-effect";
import { authOptions } from "./api/auth/[...nextauth]";
import { useRouter } from "next/router";

export default function MainPage({ session }) {
  const router = useRouter();

  return (
    // <div className="landing-page">
    //     <div className="main-content">
    //       <Typewriter
    //       onInit={
    //         (typewriter)=>{
    //             typewriter.typeString("Revolutionize Your Brand's Impact with Effortless Influencer Marketing! Unleash the Power of Collaboration – Simply Share the Link of Your Ideal Influencer, and Let Us Transform Your Campaign Dreams into Reality! ")
    //             .changeDelay(1)
    //             .start();
    //         }
    //       }

    //       ></Typewriter>
    //     </div>
    // </div>
    <div className="landing-page">
      <div className="main-content">
        <h1 className="headline">
          Revolutionize Your Brand's Impact with Effortless Influencer
          Marketing!
        </h1>
        <p className="description">
          Unleash the Power of Collaboration – Simply Share the Link of Your
          Ideal Influencer, and Let Us Transform Your Campaign Dreams into
          Reality!
        </p>
        <div className="cta-container">
          <button className="cta-button-early">
            Early Signup for Influencer
          </button>
        </div>
      </div>
      <div className="phones-container">
        <img src="/iphone1.png" alt="Phone 1" className="phone-image" />
        <img src="/iphone.png" alt="Phone 2" className="phone-image" />
        <img src="/iphone2.png" alt="Phone 3" className="phone-image" />
      </div>
      <div className="campaign-container">
        <p className="campaign-text">Get your first campaign online</p>
        <button
          className="cta-button"
          onClick={() => {
            router.push("/contact");
          }}>
          Contact Us
        </button>
      </div>
      <div className="info-container">
        <div className="campaign-info">
          <div className="question-section">
            <p className="what-text">What we do?</p>
          </div>
          <div className="info-section left">
            <img
              src="/supercharge_human.jpg"
              alt="Image 1"
              className="info-image"
            />
            <p className="campaign-description">
              Supercharge Your Marketing Campaigns with AI Optimization
            </p>
          </div>
          <div className="info-section right">
            <p className="campaign-description">
              Harness Social Media Sentiments to Craft Compelling Campaign
              Content!
            </p>
            <img src="/concept.jpg" alt="Image 2" className="info-image" />
          </div>
          <div className="info-section left">
            <img src="/meme.jpg" alt="Image 3" className="info-image" />
            <p className="campaign-description">
              Elevate Audience Engagement with the Power of Meme Marketing
            </p>
          </div>
        </div>
      </div>
      <div className="about-us-box">
        <h2 className="about-us-heading">About Us</h2>
        <p className="about-us-content">
          Collab kart is an initiative from students of IIT Roorkee. We are
          backed by TIDES IIT Roorkee. We are a group of students who want to
          transform the marketing world with AI.
        </p>
      </div>
    </div>
  );
}
