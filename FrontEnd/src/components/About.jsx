import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">About Us</h1>
            <p>The Only Thing We're Serious About Is Food. </p>
          </div>
          <p className="mid">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, eos
            voluptatibus quis animi rerum iste deserunt quo porro ullam ratione,
            facilis cum alias ducimus culpa iusto praesentium? Asperiores
            voluptates facilis pariatur cupiditate aut cum temporibus. Vero
            debitis id ducimus ipsa rerum! Non excepturi at voluptate voluptatum
            iste odio voluptatem? Eum.
          </p>
          <Link to={"/"}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" style={{height:600,width:600}}/>
        </div>
      </div>
    </section>
  );
};

export default About;
