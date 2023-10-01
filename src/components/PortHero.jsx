import { useContext } from "react";
import PortbackGround from "./PortbackGround";
import { PortContext } from "../context/portContext";

const PortHero = () => {
  
  const {theme} = useContext(PortContext);

  return (
    <main className='port-hero-wrapper' id='Home'>
      <section className="port-hero-top">
        <div className="hero-me-presentation">
          <p className="hero-me-content title">
            Hi, what's up?
            <span className="hero-me-greeting">👋</span>
          </p>
          <p className="hero-me-content subtitle">I love <span className={`subtitle-front ${theme && 'subtitleFrontDark'}`}>Frontend Developer</span></p>
          <p className="hero-me-content description">and I <span className="desc-dedicate">dedicate</span> all my effort and dedication to creating web applications.</p>
        </div>
        <div className="hero-img-water-animated">
          <div className='hero-img-wrapper'></div>
        </div>
      </section>
      <section className="port-hero-bottom">
        <a className="hero-btn" href="#About">
          <i className="bi bi-arrow-down-short iconArrow"></i>
        </a>
      </section>
    </main>
  )
};

export default PortHero;
