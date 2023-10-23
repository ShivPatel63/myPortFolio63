import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, TextBox }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="ProCom">
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      <h5 className="ProText">{TextBox}</h5>
      </div>
    </Col>
  )
}
