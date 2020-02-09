import React, { FunctionComponent, createRef } from "react";
import Image from "@Components/Image/Image";
import { IHero } from "./IHero";
import "./Hero.scss";
import Typography from "@Components/Typography/Typography";

const Hero: FunctionComponent<IHero> = ({ title, subtitle, image }) => {
  const heroRef = createRef<HTMLDivElement>();

  const heroOpacityHandler = () => {
    const node = heroRef.current;

    if (node) {
      node.style.opacity = `${Math.max(
        Math.min(1, 1 - window.scrollY / 300),
        0
      )}`;
    }
  };

  window.addEventListener("scroll", heroOpacityHandler);
  if (window.scrollY) heroOpacityHandler();

  return (
    <div className="hero flex flex--stack bring--in" ref={heroRef}>
      <Typography
        className="hero__title bring--in m--bottom-md"
        text={title}
        variant="h1"
        size="xxxl"
      />
      {subtitle ? (
        <Typography
          className="hero__subtitle bring--in"
          text={subtitle}
          variant="h3"
        />
      ) : null}
    </div>
  );
};

export default Hero;
