import "./ReadBlog.scss";
/*
import instagram from "../../Assets/icons/logo-instagram.svg";
import twitter from "../../Assets/icons/logo-twitter.svg";
import meta from "../../Assets/icons/logo-facebook.svg";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

*/
export default function ReadBlog() {
  return (
    <>
      <nav>Navbar goes here</nav>
      <hr />
      <main className="blogContent">
        <article className="blogContent__container">
          <h1 className="blogContet__container__top">Incubators vs Accelarators</h1>
          <div className="blogContent__container__bot">
            <div className="blogContent__container__bot__writtenBy">
              <div className="blogContent__container__bot__writtenBy__line"></div>
              <p>
                written by <br></br><span>JJ Watts ,</span> 2nd Year EEE<br></br>
                15 /10 /2021 , Monday
              </p>
            </div>
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
