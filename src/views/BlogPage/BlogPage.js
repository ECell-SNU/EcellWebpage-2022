import NavBar1 from "../../components/NavBar1/NavBar1";
import HeroText from "../../components/LandingSectionTexts/LandingSectionTexts";
import NavBar2 from "../../components/NavBar2/NavBar2";
import BlogArchive from "../../components/TextComponent/BlogArchive/BlogArchive";
import BlogData from "../../DataFiles/BlogData.json";
import "../BlogPage/BlogPage.scss";

export default function BlogPage() {
  return (
    <div className="BlogPageWrapper">
      <div className="BlogPageWrapper__NavBarWrapper">
        <NavBar2 />
      </div>
      <div className="BlogPageWrapper__TextComponentWrapper">
        <HeroText
          classifier="Our Blogs"
          title="Made for tomorrow's entreprenuers"
          content1="Incididunt ut nostrud nulla veniam ullamco eu id exercitation non nostrud reprehenderit. Elit elit laboris consequat
        . Pariatur elit in laborum eiusmod deserunt."
        />
      </div>
      <h3 className="BlogsReadUp">Read Up</h3>
      <div className="BlogPageGrid">
        {BlogData.map((data, index) => (
          <BlogArchive
            key={index}
            title={data["Title"]}
            author={data["Author"]}
          />
        ))}
      </div>
    </div>
  );
}
