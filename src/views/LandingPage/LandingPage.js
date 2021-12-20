import "../LandingPage/LandingPage.scss";
import LandingComponent from "../../components/LandingComponent/LandingComponent";
import LandingIllustration from "../../assests/Illustration/Landing-Illustration.svg";
import LandingSectionTexts from "../../components/LandingSectionTexts/LandingSectionTexts";
import Tab from "../../components/Tab/Tab"
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
        content1="  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Mauris augue neque
        gravida in fermentum et sollicitudin ac. Sit amet volutpat consequat
        mauris nunc congue nisi vitae."/>

        <Tab />
          </div>
        </section>

        <section className="thinktank-section">
          <div className="thinktank-section__content-container">
            <div className="temporary-placeholder"></div>
            <LandingSectionTexts classifier="Think Tank"
            title="What is the think tank ?"
            content1="Its a session that takes members through multiple modules ranging from all aspects of entrepreneurship where the members contribute to the pool through interactive and lively sessions. "
            content2="Upcoming events and ideas are first displayed during our think tank sessions for feedback and further improvements before being released. have a look at some of them below"/>
          </div>
        </section>
      </main>
    </section>
  );
}
