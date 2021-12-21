import "../ArchivePage/ArchivePage.scss";
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
          {BlogData.map((data, index) => (
            <BlogArchive
              key={index}
              title={data["Title"]}
              author={data["Author"]}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
