import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import {
  faAngular,
  faCss3,
  faGitAlt,
  faGithub,
  faHtml5,
  faJsSquare,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import "./About.scss";
import Loader from "react-loaders";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const [letterClass, setLetterClass] = useState("text_animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text_animate_hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about_page">
        <div className="text_zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p align="JUSTIFY">
          Hello! 👋 I'm Chirag, currently a sophomore pursuing a BTech in Information Technology. 
          I'm an enthusiastic self-learner and constantly exploring and creating projects 👨‍💻 to 
          simplify tasks using various technologies.
          </p>
          <p align="JUSTIFY">
          As an technophile, I'm actively seeking opportunities with established companies, 
          aiming to work on diverse and challenging projects using the latest technologies.
          </p>
          <p align="JUSTIFY">
          I possess a quiet confidence, a natural curiosity, and a genuine passion for 
          connecting with people while extending a helping hand.
          </p>
          <p align="JUSTIFY">
          If I were to sum myself up in one sentence, I'd say I'm an Engineering Student 
          who's passionate about computers, a cricket lover and absolutely tech-obsessed!
          </p>
          <div className="flat_button">
            <a target="_blank" href="/Chirag-Resume.pdf">
              RESUME
            </a>
          </div>
        </div>

        <div className="stage_cube_cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faGithub} color="#000000" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faPython} color="#0075FF" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faCode} color="#181818" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
