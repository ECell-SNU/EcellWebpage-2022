import "../ArchivePage/ArchivePage.scss";
import BlogData from "../../DataFiles/BlogData.json";
import BlogArchive from "../../components/TextComponent/BlogArchive/BlogArchive";
export default function ArchivePage() {
  return (
    <div className="ArchivePageWrapper">
      <header>
        <nav>hi</nav>
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
