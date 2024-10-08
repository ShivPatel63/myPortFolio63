import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                {/* <button id='resume'>
                <a href="https://drive.google.com/file/d/1QF-6Pn7NNH6feKDS6zYHOtMdHz_zbYGA/view?usp=sharing" target="_blank">
                <span className="tagline">DOWNLOAD MY RESUME</span>
                </a>
                </button> */}
                <h1>{`Hey ! I'm Shiv Patel.`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Developer"]'><span className="wrap">{text}</span></span></h1>
                  {/* /<p>I am creative full stack web Developer! I am enthusiastic and passionate about my work.I have done my masters in computer science.</p> */}
                  {/* <p>Experienced Software Developer with a proven track record across diverse industries, including education, consulting, and digital marketing. Proficient in full-stack development, spanning both front-end and back-end. Currently engaged in pioneering research focused on textual similarity and document matching using Machine Learning - NLP, in addition to creating a cutting-edge Selenium automation bot.</p> */}
                  <p>I am Oracle Certified Java Programmer with several years of experience in design, development, analysis and troubleshooting web applications in various domains like education, consulting, and digital marketing. Proficient in full-stack development, spanning both front-end and back-end with robust understanding of Data Structures and Algorithms. 

Currently engaged in pioneering research focused on textual similarity and document matching using Machine Learning - NLP, in addition to creating a cutting-edge Selenium automation bot.</p>                  
                  <button onClick={() => console.log('connect')}><a href="mailto:patel.shiv6320@gmail.com">Let’s Connect <ArrowRightCircle size={25} /></a></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
