import "./ArchivePage.scss";
import BlogData from "../../DataFiles/BlogData.json";
import BlogArchive from "../../components/TextComponent/BlogArchive/BlogArchive";
import { motion } from "framer-motion";

export default function ArchivePage() {
  return (
    <div className="ArchivePageWrapper">
      <header>
        <motion.nav
          initial={{opacity : 0, y: -10}}
          animate={{opacity : 1, y: 0}}
          transition={{type : "spring", stiffness : 120 ,delay : 0.6 ,duration : 1.2}} 
          className="ArchivePageNavbar">
          <a href="/blogs" className="ArchivePageNavbar__button">
            &larr; &nbsp; &nbsp;Go Back
          </a>
          <input
            type="text"
            placeholder="Search Here"
            className="ArchivePageNavbar__search"
          ></input>
        </motion.nav>
      </header>
      <main>
        <div className="ArchivePageWrapper__grid">
        {BlogData.filter((data) => {return data["Type"] === "Archive"}).map((data, index, i) => (
          <motion.div
          initial={{opacity : 0, y: 10}}
          animate={{opacity : 1, y: 0}}
          transition={{delay : 0.2 * index ,duration : 0.6}} 
          className="ArchivePageWrapper__grid__animationWrapper">
                      <BlogArchive
            tag={data["Type"] === "Archive" ? "BlogArchiveContainer__tag tag__archive" : "BlogArchiveContainer__tag tag__latest"}
            key={index}
            title={data["Title"]}
            author={data["Author"]}
            status={data["Type"]}
          />
          </motion.div>
        ))}
        </div>
      </main>
    </div>
  );
}
