import chase from '../../assets/images/chase.jpeg';

import './About.scss';

function About() {
  return (
    <div className="view About">
      <div style={{ marginBottom: '50px' }}>What?</div>
      <img src={chase} alt="Chase Allen" />
    </div>
  );
}

export default About;
