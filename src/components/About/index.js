// Write your code here
import Header from '../Header'

import './index.css'

const About = () => (
  <div className="about-container">
    <Header />
    <div className="about-image-container">
      <img
        className="mobile-about-container"
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="About"
      />
      <img
        src="desktop-about-image"
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="About"
      />
    </div>
  </div>
)

export default About
