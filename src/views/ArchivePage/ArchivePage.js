import "../ArchivePage/ArchivePage.scss";
import BlogData from "../../DataFiles/BlogData.json";
import BlogArchive from "../../components/TextComponent/BlogArchive/BlogArchive";
export default function ArchivePage() {
  return (
    <div className="ArchivePageWrapper">
      <header>
        <nav className="ArchivePageNavbar">
          <button className="ArchivePageNavbar__button">&larr; Go Back</button>
          <input
            type="text"
            placeholder="Search Here"
            className="ArchivePageNavbar__search"
          ></input>
        </nav>
      </header>
      <main>
        <div className="ArchivePageWrapper__grid">
          {BlogData.map((data) => (
            <BlogArchive title={data["Title"]} author={data["Author"]} />
          ))}
        </div>
      </main>
    </div>
  );
}
