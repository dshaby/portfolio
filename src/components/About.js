import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import nodejsIcon from "@iconify/icons-logos/nodejs-icon";
import reactIcon from "@iconify/icons-logos/react";
import typescriptIcon from "@iconify/icons-logos/typescript-icon";

function About(props) {
  const [imageLoaded, setImageLoaded] = useState(false);

  if (props?.sharedBasicInfo) {
    var profilepic = "images/" + props.sharedBasicInfo.image;
  }
  if (props?.resumeBasicInfo) {
    var sectionName = props.resumeBasicInfo.section_name.about;
    var hello = props.resumeBasicInfo.description_header;
    var about = props.resumeBasicInfo.description;
  }

  useEffect(() => {
    if (profilepic) {
      const img = new Image();
      img.src = profilepic;
      img.onload = () => {
        setImageLoaded(true);
      };
    }
  }, [profilepic]);

  return (
    <section id="about">
      <div className="col-md-12">
        <h1 style={{ color: "black" }}>
          <span>{sectionName}</span>
        </h1>
        <div className="row center mx-auto mb-5">
          <div className="col-md-4 mb-5 center">
            <div className="polaroid">
              <span style={{ cursor: "auto" }}>
                {imageLoaded ? (
                  <img height="350px" src={profilepic} alt="Daniel Shaby" />
                ) : (
                  <div
                    style={{
                      height: "350px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="spinner-border text-primary"
                      role="status"
                    ></div>
                  </div>
                )}

                <Icon
                  icon={reactIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                  icon={typescriptIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                  icon={nodejsIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
              </span>
            </div>
          </div>

          <div className="col-md-8 center">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header">
                  <span
                    className="iconify"
                    data-icon="emojione:red-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:yellow-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:green-circle"
                    data-inline="false"
                  ></span>
                </div>
                <div
                  className="card-body font-trebuchet text-justify ml-3 mr-3"
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                  }}
                >
                  <br />
                  <span className="wave">{hello} :) </span>
                  <br />
                  <br />
                  {about}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
