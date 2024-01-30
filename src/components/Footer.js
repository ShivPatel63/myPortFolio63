import { Container, Row, Col } from "react-bootstrap";

import { ArrowRightCircle } from 'react-bootstrap-icons';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
         
          <Col lg={12} className="text-center">
          <button onClick={() => console.log('connect')}><a href="mailto:patel.shiv6320@gmail.com">Let’s Connect <ArrowRightCircle size={25} /></a></button>
            <div className="social-icon">
              
                <a href="https://www.linkedin.com/in/shiv-patel-63ce/" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/ShivPatel63" target="_blank"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/shivay__63/" target="_blank"><img src={navIcon3} alt="" /></a>
                
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
