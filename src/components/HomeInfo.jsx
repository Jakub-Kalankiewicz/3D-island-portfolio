import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className=" font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Jakub</span> 👋
      <br />A software engineer from Poland
    </h1>
  ),
  2: (
    <InfoBox
      text="I am a software engineer with a passion for web development. I am currently having internship as a frontend developer at Zendesk."
      link="/about"
      btnText="Learn more"
    />
  ),
  3:(
    <InfoBox
      text="I have worked on many projects. Check out my portfolio to see some of them."
      link="/projects"
      btnText="Visit my protfolio"
    />
  ),
  4: (
    <InfoBox
      text="I am always open to new opportunities. If you want to work with me, feel free to contact me."
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
