import NavBar1 from "../../components/NavBar1/NavBar1";
import TextComponent from "../../components/TextComponent/TextComponent";
import HeroText from "../../components/LandingSectionTexts/LandingSectionTexts"
import BlogArchive from "../../components/TextComponent/BlogArchive/BlogArchive";
import "../BlogPage/BlogPage.scss";

export default function BlogPage() {
  return (
    <div className="BlogPageWrapper">
      <div className="BlogPageWrapper__NavBarWrapper">
        <NavBar1></NavBar1>{" "}
      </div>
      <div className="BlogPageWrapper__TextComponentWrapper">
        <HeroText classifier="Our Blogs"
        title="Made for tomorrow's entreprenuers"
        content1="Incididunt ut nostrud nulla veniam ullamco eu id exercitation non nostrud reprehenderit. Elit elit laboris consequat
        Lorem laborum veniam aliqua non. Incididunt et eiusmod commodo magna commodo. Pariatur elit in laborum eiusmod deserunt."/>
      </div>
      <h3 className="BlogsReadUp">Read Up</h3>
      <div className="BlogPageGrid">
        <div className="BlogPageWrapper__card">
          <BlogArchive title="Content team plis halp" author="Prabhav Pandey" />
        </div>
        <div className="BlogPageWrapper__card">
          <BlogArchive title="Content team plis halp" author="Prabhav Pandey" />
        </div>
        <div className="BlogPageWrapper__card">
          <BlogArchive title="Content team plis halp" author="Prabhav Pandey" />
        </div>
        <div className="BlogPageWrapper__card">
          <BlogArchive title="Content team plis halp" author="Prabhav Pandey" />
        </div>
        <div className="BlogPageWrapper__card">
          <BlogArchive title="Content team plis halp" author="Prabhav Pandey" />
        </div>
        <div className="BlogPageWrapper__card">
          <BlogArchive title="Content team plis halp" author="Prabhav Pandey" />
        </div>
        <div className="BlogPageWrapper__card">
          <BlogArchive title="Content team plis halp" author="Prabhav Pandey" />
        </div>
        <div className="BlogPageWrapper__card">
          <BlogArchive title="Content team plis halp" author="Prabhav Pandey" />
        </div>
        <div className="BlogPageWrapper__card">
          <BlogArchive title="Content team plis halp" author="Prabhav Pandey" />
        </div>
      </div>
    </div>
  );
}
