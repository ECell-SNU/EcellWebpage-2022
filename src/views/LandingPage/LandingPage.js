import "../LandingPage/LandingPage.scss";
import LandingComponent from "../../components/LandingComponent/LandingComponent";
import LandingIllustration from "../../assests/Illustration/Landing-Illustration.svg";
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
      </main>
    </section>
  );
}
