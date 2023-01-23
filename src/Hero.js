import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments Lorem, ipsum dolor. Lorem, ipsum </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quae!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            est.
          </p>
          <button className="btn ">Start Now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="Phone" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
