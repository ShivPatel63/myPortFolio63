import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/pacman.jpeg";
import projImg2 from "../assets/img/sprijava.png";
import projImg3 from "../assets/img/webscrap.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "PacMan",
      description: "Python",
      imgUrl: projImg1,
      TextBox : "Analyzed Pacman agent and purpose of game to find paths through his maze world, both to reach a particular location and to collect food efficiently.",
    },
    {
      title: "Order Management",
      description: "Java, Spring boot, Spring data JPA, RESTful web services, MongoDB",
      imgUrl: projImg2,
      TextBox : "Utilizing cutting-edge technologies and for the creation of new orders, retrieval of old orders, and removal of previously placed orders, enhancing overall order processes.",
    },
    {
      title: "Textual Similarity and Automation Bot ",
      description: "Python, BeautifulSoup Selenium, NLP",
      imgUrl: projImg3,
      TextBox: "Extracting real-time data, Training machine learning models for textual similarity and •	Developing an automation bot using Selenium Python  ",
    },
    {
      title: "APIX",
      description: "HTML, CSS, JavaScript, NodeJS, Express JS",
      imgUrl: projImg4,
      TextBox : "Developed a web app platform for artists to share, appreciate, and discuss portraits. It enables to post artwork, engage through likes and comments, connect with friends.",
    },
    {
      title: "Music Player",
      description: "HTML, CSS",
      imgUrl: projImg5,
      TextBox : "Created UI for music player using more than 10 animations and styles to improve user experience, hands-on for basic HTML and CSS and experienced UI Development",
    },
    // {
    //   title: "React",
    //   description: "",
    //   imgUrl: projImg4,
    //   TextBox : "",
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
          
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
