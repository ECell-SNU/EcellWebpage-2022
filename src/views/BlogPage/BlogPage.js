import TextComponent from "../../components/TextComponent/TextComponent";
import BlogArchive from "../../components/TextComponent/BlogArchive/BlogArchive";
import "../BlogPage/BlogPage.scss";

export default function BlogPage() {
  return (
    <div className="BlogPageWrapper">
      <div>NavBar goes here</div>
      <div>
        <TextComponent
          subheading="Hello"
          heading="Bois"
          content="Incididunt ut nostrud nulla veniam ullamco eu id exercitation non nostrud reprehenderit. Elit elit laboris consequat Lorem laborum veniam aliqua non. Incididunt et eiusmod commodo magna commodo. Pariatur elit in laborum eiusmod deserunt. Sunt tempor magna enim adipisicing consequat et. Reprehenderit aliquip amet elit nisi labore et sit amet commodo sit sint consectetur."
        />
      </div>
      <hr />

      <div className="BlogPageWrapper__card">
        <BlogArchive title="Content team plis halp" author="Prabhav Pandey" />
      </div>
    </div>
  );
}
