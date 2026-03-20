// import { useEffect, useRef } from 'react';
import SectionHead from '../../reusables/SectionHead';

import './about.css';

function About() {


  return (
    <div id="about" className="about-section" >
      <div className="container about-grid">
        <div>
          <SectionHead
            title="About me"
            TagLevel="h2"
            subtitle="Frontend Developer building clean, responsive, and user-focused web applications."
          />

          <div className="about-text show">
            <p>
              I enjoy turning ideas into clean, functional interfaces that feel
              simple and intuitive to use.
            </p>
            <p>
              I focus on writing maintainable code, structuring applications
              clearly, and building interfaces that are responsive and easy to
              interact with.
            </p>
            <p>
              I’m constantly improving my skills and paying attention to the
              details that make a product feel polished and reliable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
