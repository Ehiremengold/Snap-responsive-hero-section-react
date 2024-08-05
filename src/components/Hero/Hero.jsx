import "./Hero.css";
import desktopHeroImg from "../../../public/assets/hero/image-hero-desktop.png";
import mobileHeroImg from "../../../public/assets/hero/image-hero-mobile.png";
import * as clients from "../../../public/assets/client/utils.js";

const Hero = () => {
  const heroImg = () => {
    if (window.innerWidth <= 768) {
      return mobileHeroImg;
    } else {
      return desktopHeroImg;
    }
  };
  return (
    <section className="hero__section">
      <div className="hero__product-description">
        <div className="hero__text-description">
          <div className="hero_text_subtitle">
            <h1>Make remote work</h1>
            <p>
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
          </div>
          <div className="hero__cta-btn">
            <button className="learn-more-btn">Learn more</button>
          </div>
          <div className="hero__brands">
            <img className="brand-img" src={clients.brand1} alt="" />
            <img className="brand-img" src={clients.brand2} alt="" />
            <img className="brand-img" src={clients.brand3} alt="" />
            <img className="brand-img" src={clients.brand4} alt="" />
          </div>
        </div>
        <div className="hero__img-description">
          <img src={heroImg()} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
