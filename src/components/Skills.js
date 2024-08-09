import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                    {/* <h5>I excel in Java - Full Stack, Spring & Spring boot, Hibernate, Microservices, Rest APIs, MERN Stack, Python, Selenium Automation and NLP – Machine learning, Agile, SDLC, Data Structures and Algorithms.</h5> */}

                        {/* <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider"> */}
                            <div className="item">
                                <div className="skillsbg">
                                {/* <img src={meter1} alt="Image" /> */}
                                <h5>Java</h5>
                                </div>
                            </div>
                            <div className="item">
                                <div className="skillsbg">
                                {/* <img src={meter2} alt="Image" /> */}
                                <h5>Spring</h5>
                                </div>
                            </div>
                            <div className="item">
                            <div className="skillsbg">
                                {/* <img src={meter3} alt="Image" /> */}
                                <h5>Spring Boot</h5>
                                </div>
                            </div>
                            <div className="item">
                            <div className="skillsbg">
                                {/* <img src={meter1} alt="Image" /> */}
                                <h5>REST API</h5>
                                </div>
                            </div>
                            <div className="item">
                            <div className="skillsbg">
                                {/* <img src={meter1} alt="Image" /> */}
                                <h5>Hibernate</h5>
                                </div>
                            </div>
                            <div className="item">
                            <div className="skillsbg">
                                {/* <img src={meter1} alt="Image" /> */}
                                <h5>Microservices</h5>
                                </div>
                            </div>
                            <div className="item">
                            <div className="skillsbg">
                                {/* <img src={meter1} alt="Image" /> */}
                                <h5>ReactJS</h5>
                                </div>
                            </div>
                            <div className="item">
                            <div className="skillsbg">
                                {/* <img src={meter1} alt="Image" /> */}
                                <h5>Cloud</h5>
                                </div>
                            </div>
                            <div className="item">
                            <div className="skillsbg">
                                {/* <img src={meter1} alt="Image" /> */}
                                <h5>Kafka</h5>
                                </div>
                            </div>
                            <div className="item">
                            <div className="skillsbg">
                                {/* <img src={meter1} alt="Image" /> */}
                                <h5>CI/CD</h5>
                                </div>
                            </div>
                            <div className="item">
                            <div className="skillsbg">
                                {/* <img src={meter1} alt="Image" /> */}
                                <h5>Web Services</h5>
                                </div>
                            </div>
                            
                            
                        {/* </Carousel> */}
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
