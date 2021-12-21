import "../LandingPage/LandingPage.scss";
import LandingComponent from "../../components/LandingComponent/LandingComponent";
import LandingIllustration from "../../Assets/Illustration/Landing-Illustration.svg";
import LandingSectionTexts from "../../components/LandingSectionTexts/LandingSectionTexts";
import Tab from "../../components/Tab/Tab";
import Session1Illustration from "../../Assets/Illustration/Session-1-illustration.svg";
import Session2Illustration from "../../Assets/Illustration/Session-2-illustration(to be updated).svg";
import Header from "../../components/Header/Header";

export default function LandingPage() {
  return (
    <section className="LandingPageWrapper">
      <header>
        <nav>
          <Header />
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-section__content-container">
            <LandingComponent />
            <img
              alt="hero"
              className="hero-section__content-container__illustration"
              src={LandingIllustration}
            ></img>
          </div>
        </section>

        <section className="aboutus-section">
          <div className="aboutus-section__content-container">
            <LandingSectionTexts
              classifier="About us"
              title="Venture Beyond the norm"
              content1="  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Mauris augue neque
        gravida in fermentum et sollicitudin ac. Sit amet volutpat consequat
        mauris nunc congue nisi vitae."
            />

            <Tab />
          </div>
        </section>

        <section className="thinktank-section">
          <div className="thinktank-section__content-container">
            <div className="temporary-placeholder"></div>
            <LandingSectionTexts
              classifier="Think Tank"
              title="What is the think tank ?"
              content1="Its a session that takes members through multiple modules ranging from all aspects of entrepreneurship where the members contribute to the pool through interactive and lively sessions. "
              content2="Upcoming events and ideas are first displayed during our think tank sessions for feedback and further improvements before being released. have a look at some of them below"
            />
          </div>
        </section>

        <section className="session-section">
          <div className="session-section__content-container">
            <LandingSectionTexts
              classifier="Think Tank Session # 1"
              title="Ecell SNU’s USP"
              content1="It takes us through multiple modules ranging from all aspects of entrepreneurship where the members contribute to the pool through interactive and lively sessions."
            />
            <img
              alt="session"
              className="session-section__content-container__illustration"
              src={Session1Illustration}
            ></img>
          </div>
        </section>

        <section className="session-section">
          <div className="session-section__content-container">
            <img
              alt="session"
              className="session-section__content-container__illustration"
              src={Session2Illustration}
            ></img>
            <LandingSectionTexts
              classifier="Think Tank Session # 2"
              title="Second Title"
              content1="Sit amet volutpat consequat mauris nunc congue nisi vitae. Elit eget gravida cum sociis natoque penatibus et magnis dis. Turpis egestas maecenas  convallis posuere morbi leo urna molestie. "
            />
          </div>
        </section>
      </main>
    </section>
  );
}
