import "../LandingPage/LandingPage.scss";
import LandingComponent from "../../components/LandingComponent/LandingComponent";
import NavBar1 from "../../components/NavBar1/NavBar1";
export default function LandingPage() {
  return (
    <section className="LandingPageWrapper">
      <header>
      <nav>
        <NavBar1 />
      </nav>
      </header>
    </section>
  );
}
