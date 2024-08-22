// import React from "react";
import "../styles/journey.scss";
import { IoSchoolOutline as SchoolIcon } from "react-icons/io5";
import { MdWorkOutline as WorkIcon } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Journey = () => {
  let workIconStyle = { background: "#eab308" };
  let schoolIconStyle = { background: "#4f46e5" };

  let timelineElements = [
    {
      id: 1,
      title: "Fullstack Developer",
      company: "SourceDotCom Pvt Ltd",
      location: "Gurgaon",
      date: "May 2024 - Aug 2024",
      desc: `Creating dynamic and responsive websites using web technologies like React for frontend, Dotnet core for backend api and Mysql database.`,
      icon: "work",
    },
    {
      id: 2,
      title: "Web Developer Trainee",
      company: "Magic Edtech Pvt Ltd",
      location: "Noida",
      date: "Nov 2022 - Sept 2023",
      desc: `Assisted in the development of E-books.  Developing E-books for the client and integrating them with animations, games and interactivity to make book more lively.`,
      icon: "work",
    },
    {
      id: 3,
      title: "Fullstack Intern",
      company: "Jspyder Pvt Ltd",
      location: "Noida",
      date: "July 2022 - Nov 2022",
      desc: `Learned java fullstack web development with web technologies like Html, Css, Javascript and Mysql database.`,
      icon: "work",
    },
    {
      id: 4,
      title: "B.Tech in Computer Science Engineering(CSE)",
      company: "IIMT Engineering College (AKTU)",
      location: "Meerut",
      date: "Aug 2017 - Aug 2021",
      desc: "Percentage : 70 %",
      icon: "school",
    },
    {
      id: 5,
      title: "Intermediate",
      company: "Kendriya Vidyalaya Sikh Lines(CBSE)",
      location: "Meerut",
      date: "Apr 2016 - Jun 2017",
      desc: "Percentage : 70 %",
      icon: "school",
    },
    {
      id: 6,
      title: "High School",
      company: "Kendriya Vidyalaya Sikh Lines(CBSE)",
      location: "Meerut",
      date: "Apr 2014 - May 2015",
      desc: "Grade : 8 CGPA",
      icon: "school",
    },
  ];

  return (
    <div className="journey container section">
      <h2 className="title">My Journey</h2>
      <VerticalTimeline>
        {timelineElements.map((ele) => {
          let isWorkIcon = ele.icon === "work";
          return (
            <VerticalTimelineElement
              key={ele.key}
              date={ele.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyle : schoolIconStyle}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">{ele.title}</h3>
              <div className="element__container">
                <div className="vertical-timeline-element-subtitle">
                  {ele.company}
                </div>
                <div className="vertical-timeline-element-subtitle">
                  {ele.location}
                </div>
              </div>
              <p className="vertical-timeline-element-subtitle">{ele.desc}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Journey;
