import HeroText from "../../components/LandingSectionTexts/LandingSectionTexts";
import Header from "../../components/Header/Header";
import BlogArchive from "../../components/TextComponent/BlogArchive/BlogArchive";
import BlogData from "../../DataFiles/BlogData.json";
import "../BlogPage/BlogPage.scss";

export default function BlogPage() {
  return (
    <div className="BlogPageWrapper">
      <Header />
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
        {BlogData.filter((data) => {return data["Type"] === "Latest"}).map((data, index) => (
          <BlogArchive
            tag={data["Type"] === "Archive" ? "BlogArchiveContainer__tag tag__archive" : "BlogArchiveContainer__tag tag__latest"}
            key={index}
            title={data["Title"]}
            author={data["Author"]}
            status={data["Type"]}
          />
        ))}
      </div>
    </div>
  );
}
