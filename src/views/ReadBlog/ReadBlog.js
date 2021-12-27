import "../ReadBlog/ReadBlog.scss";
import data from "../../DataFiles/BlogData.json";
import Header from "../../components/Header/Header";
import Blog from "../../components/Blog/Blog";
import DarkMode from "../../Assets/icons/dark.svg";
import Insta from "../../Assets/icons/logo-instagram.svg";
import FB from "../../Assets/icons/logo-facebook.svg";
import Twitter from "../../Assets/icons/logo-twitter.svg";

export default function BlogRead() {
  return (
    <>
      <header>
        <div className="navbar">
          <div className="navbar__darkToggle">
            <img src={DarkMode} alt="mode toggle"></img>
            <p>Dark Mode</p>
          </div>
          <div className="navbar__nav">
            <p>Other Blogs</p>
            <p>Archive</p>
          </div>
          <div className="navbar__share">
            <img src={Insta} alt="insta logo" height="30px"></img>
            <img src={FB} alt="facebook logo" height="30px"></img>
            <img src={Twitter} alt="twitter logo" height="30px"></img>
          </div>
        </div>
        <hr />
      </header>

      <main>
        <div className="ContentContainer">
          <div className="ContentContainer__byline">
            <Blog
              author={"JJ Watts"}
              title={"Incubators vs Accelarators"}
              content={
                "Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending \nparagraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing"
              }
              date={"12/12/2021"}
              day={"Monday"}
              credential={"2nd Year EEE"}
            />
          </div>
        </div>
      </main>
    </>
  );
}
