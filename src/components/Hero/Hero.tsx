import React, { FunctionComponent, createRef, Fragment } from "react";
import Typography from "@Components/Typography/Typography";
import Image from "@Components/Image/Image";
import { IHero } from "./IHero";
import "./Hero.scss";

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
    <div
      className="hero flex flex--stack flex--centre flex--v-centre bring--in"
      ref={heroRef}
    >
      {image ? (
        <Image src={image} caption={title} alt="Rick and Morty" hero />
      ) : (
        <Fragment>
          <Typography
            className="hero__title bring--in m--bottom-md"
            text={title}
            variant="h1"
            size="xxxl"
          />
          {subtitle ? (
            <Typography className="bring--in" text={subtitle} variant="h3" />
          ) : null}
        </Fragment>
      )}
    </div>
  );
};

export default Hero;
