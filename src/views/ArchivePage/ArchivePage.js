import "./ArchivePage.scss";
import BlogData from "../../DataFiles/BlogData.json";
import BlogArchive from "../../components/TextComponent/BlogArchive/BlogArchive";

export default function ArchivePage() {
  return (
    <div className="ArchivePageWrapper">
      <header>
        <nav className="ArchivePageNavbar">
          <a href="/blogs" className="ArchivePageNavbar__button">
            &larr; &nbsp; &nbsp;Go Back
          </a>
          <input
            type="text"
            placeholder="Search Here"
            className="ArchivePageNavbar__search"
          ></input>
        </nav>
      </header>
      <main>
        <div className="ArchivePageWrapper__grid">
        {BlogData.filter((data) => {return data["Type"] === "Archive"}).map((data, index) => (
          <BlogArchive
            tag={data["Type"] === "Archive" ? "BlogArchiveContainer__tag tag__archive" : "BlogArchiveContainer__tag tag__latest"}
            key={index}
            title={data["Title"]}
            author={data["Author"]}
            status={data["Type"]}
          />
        ))}
        </div>
      </main>
    </div>
  );
}
