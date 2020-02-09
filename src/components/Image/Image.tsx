import React, { FunctionComponent, Fragment } from "react";
import Typography from "@Components/Typography/Typography";
import useObserver from "@Hooks/useObserver";
import { IImage } from "./IImage";
import clsx from "clsx";
import "./Image.scss";

const Image: FunctionComponent<IImage> = ({
  className,
  subtitle,
  caption,
  profile,
  hero,
  src,
  alt
}) => {
  const [imageRef, inView] = useObserver();

  return (
    <figure
      className={clsx("image__container pos--rel", {
        [`image__container`]: !profile,
        [`${className}`]: className,
        "image--profile": profile,
        "to--animate": !inView,
        "bring--in": inView,
        "image--hero": hero
      })}
      ref={imageRef}
    >
      {inView ? (
        <Fragment>
          <img
            className={clsx("image width--100", {
              "to--animate": !inView,
              "bring--in": inView
            })}
            src={src}
            alt={alt}
          />
          {caption ? (
            <figcaption className="image__overlay flex flex--v-end">
              <div className="p--all-md">
                <Typography text={caption} variant="h1" size="xl" />
                {subtitle ? (
                  <Typography text={subtitle} variant="h2" size="md" />
                ) : null}
              </div>
            </figcaption>
          ) : null}
        </Fragment>
      ) : null}
    </figure>
  );
};

export default Image;
