import "../LandingPage/LandingPage.scss";
import LandingComponent from "../../components/LandingComponent/LandingComponent";
import LandingIllustration from "../../assests/Illustration/Landing-Illustration.svg";
import LandingSectionTexts from "../../components/LandingSectionTexts/LandingSectionTexts";
import NavBar1 from "../../components/NavBar1/NavBar1";
export default function LandingPage() {
  return (
    <section className="LandingPageWrapper">
      <header>
      <nav>
        <NavBar1 />
      </nav>
      </header>

      <main>
        <section className ="hero-section" >
          <div className="hero-section__content-container">
          <LandingComponent />
          <img className="hero-section__content-container__illustrtion"src={LandingIllustration}></img>
          </div>
        </section>

        <section className="aboutus-section">
         <div className="aboutus-section__content-container">
         <LandingSectionTexts  classifier="About us"
        title="Venture Beyond the norm"
        content="  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Mauris augue neque
        gravida in fermentum et sollicitudin ac. Sit amet volutpat consequat
        mauris nunc congue nisi vitae."/>
          </div>
        </section>
      </main>
    </section>
  );
}
