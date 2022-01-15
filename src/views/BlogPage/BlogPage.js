import HeroText from "../../components/LandingSectionTexts/LandingSectionTexts";
import Header from "../../components/Header/Header";
import BlogArchive from "../../components/TextComponent/BlogArchive/BlogArchive";
import BlogData from "../../DataFiles/BlogData.json";
import "../BlogPage/BlogPage.scss";
import { motion } from "framer-motion";

export default function BlogPage() {
  return (
    <div className="BlogPageWrapper">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 120,
          delay: 0.6,
          duration: 1.2,
        }}
      >
        <Header
          navItem1="Home"
          navItem2="About Us"
          navItem3="Team"
          navItem4="Think Tank"
          navItem5="Archive"
          routeItem1="/home"
          routeItem2="/home/#aboutus"
          routeItem3="/teams"
          routeItem4="/home/#thinktank"
          routeItem5="/blogs/archive"
        />
      </motion.div>
      <main>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="BlogPageWrapper__TextComponentWrapper"
        >
          <HeroText
            className="BlogPageWrapper__TextComponentWrapper__HeroText"
            classifier="Our Blogs"
            title="Made for tomorrow's entreprenuers"
            content1="Here's where you can find insights, ideas, inspiration about all things entrepreneurship and to guide the mind towards these topics.
            Our students also write a weekly newsletter, stay tuned for more"
          />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="BlogsReadUp"
        >
          Read Up
        </motion.h3>
        <div className="BlogPageGrid">
          {BlogData.filter((data) => {
            return data["Type"] === "Latest";
          }).map((data, index) => (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              className="BlogPageGrid__animationWrapper"
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
