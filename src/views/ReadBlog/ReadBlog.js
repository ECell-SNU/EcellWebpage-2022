import "./ReadBlog.scss";

export default function ReadBlog() {
  return (
    <>
      <nav> navbar</nav>
      <main className="blogContent">
        <article className="blogContent__container">
          <h1 className="blogContet__container__top">Heading</h1>
          <div className="blogContent__container__bot">
            <p className="blogContent__container__bot__writtenBy">Left Text</p>
            <p className="blogContent__container__bot__text">
              Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem
              IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
              IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
              Ipsum
            </p>
          </div>
        </article>
      </main>
    </>
  );
}
