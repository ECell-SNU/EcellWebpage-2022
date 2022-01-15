import "./ArchivePage.scss";
import BlogData from "../../DataFiles/BlogData.json";
import BlogArchive from "../../components/TextComponent/BlogArchive/BlogArchive";
import { motion } from "framer-motion";
import Fuse from "fuse.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ArchivePage() {
  const [searchResults, setSearchResults] = useState([]);
  const fuse = new Fuse(BlogData, {
    keys: ["Title", "Content"],
    isCaseSensitive: false,
  });

  useEffect(() => {
    console.log(searchResults);
  });

  return (
    <div className="ArchivePageWrapper">
      <header>
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 120,
            delay: 0.6,
            duration: 1.2,
          }}
          className="ArchivePageNavbar"
        >
          <a href="/blogs" className="ArchivePageNavbar__button">
            &larr; &nbsp; &nbsp;Go Back
          </a>
          <div className="ArchivePageNavbar__searchBar">
            <input
              type="text"
              placeholder="Search Here"
              className="ArchivePageNavbar__search"
              onChange={(e) => {
                setSearchResults(fuse.search(e.target.value));
                console.log(fuse.search(e.target.value.toLocaleLowerCase));
              }}
            ></input>
            <ul>
              {searchResults.map((result) => (
                <li>
                  <Link to={`/blog/read/${result.item.ID}`}>
                    {result.item.Title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.nav>
      </header>
      <main>
        <div className="ArchivePageWrapper__grid">
          {BlogData.filter((data) => {
            return data["Type"] === "Archive";
          }).map((data, index) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              className="ArchivePageWrapper__grid__animationWrapper"
            >
              <BlogArchive
                tag={
                  data["Type"] === "Archive"
                    ? "BlogArchiveContainer__tag tag__archive"
                    : "BlogArchiveContainer__tag tag__latest"
                }
                key={index}
                title={data["Title"]}
                author={data["Author"]}
                status={data["Type"]}
                ID={data["ID"]}
              />
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
