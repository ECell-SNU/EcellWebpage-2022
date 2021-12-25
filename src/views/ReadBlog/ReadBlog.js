import "../ReadBlog/ReadBlog.scss";
import data from "../../DataFiles/BlogData.json";
import Blog from "../../components/Blog/Blog";

export default function BlogRead() {
  return (
    <section className="LandingPageWrapper">
      <header>
        <div>Nav Bar Goes Here</div>
        <br></br>
        <hr />
        <br></br>
      </header>

      <main>
        <div className="ContentContainer">
          <div className="ContentContainer__byline">
            <Blog
              author={"JJ Watts"}
              title={"Incubators vs Accelarators"}
              content={
                "If you ask anyone what an incubator is, they will most likely envision an\n apparatus in which jhd j hkshdkj shk hkh kh WJDHAkjsdh jkajhd whd whd jadj ahhf hw ehf j"
              }
              date={"12/12/2021"}
              day={"Monday"}
              credential={"2nd Year EEE"}
            />
          </div>
        </div>
      </main>
    </section>
  );
}
