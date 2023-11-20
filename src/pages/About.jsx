import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { skills, experiences } from "../constants";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Jakub
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I am a 21 year old student of the{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            University of Technology
          </span>{" "}
          in Warsaw. I am currently studying{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            Computer Science
          </span>{" "}
          and I am in the last year of my studies. I am currently learning{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            React, ThreeJS and some ethical hacking
          </span>
          .
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <div key={index} className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I have been working as a{" "}
            <span className="blue-gradient_text font-semibold drop-shadow">
              Frontend Developer
            </span>{" "}
            for{" "}
            <span className="blue-gradient_text font-semibold drop-shadow">
              2 years
            </span>
            . I have experience with{" "}
            <span className="blue-gradient_text font-semibold drop-shadow">
              React, NextJS, TailwindCSS, ThreeJS
            </span>{" "}
            and{" "}
            <span className="blue-gradient_text font-semibold drop-shadow">
              NodeJS
            </span>
            .
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                date={experience.date}
                icon={
                  <div className=" flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{
                  background: experience.iconBg,
                }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: "0" }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className=" border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
