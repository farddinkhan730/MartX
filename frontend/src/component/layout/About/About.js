import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/martx/image/upload/v1653408889/martxlogo_plxbfh.jpg"
              alt="Founder"
            />
            <Typography>MartX</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              MartX is a e-commerce website developed and built by the students of GLA
              University.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Social Handles</Typography>
            <a href="/" target="blank">
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
