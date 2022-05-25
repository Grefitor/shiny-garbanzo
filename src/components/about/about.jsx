import "./about.scss";
import Award from "../../img/award.jpg";
import Dev from '../../img/developer.jpg';

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Dev}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title fw-b">About Me</h1>
        <p className="a-sub fw-sb">
          Seasoned Front End Developer with 4 years of experience
        </p>
        <p className="a-desc">
          Inblending the art of design with skill of programming to deliver
          animmersive and engaging user experience through efficientwebsite
          development, proactive feature optimization, andrelentless debugging.
          Very passionate about aesthetics and UI design.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title fw-b">Two Times DocStar Of the Month</h4>
            <p className="a-award-desc">
              Monthly Awards for Best Acheivers of the company
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
