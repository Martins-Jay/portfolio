import { useState } from 'react';
import CodeIcon from '../../../assets/icons/CodeIcon';
import LayoutIcon from '../../../assets/icons/LayoutIcon';
import ReactIcon from '../../../assets/icons/ReactIcon';

import './hero.css';

function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="section-container" id="top">
      <div className="hero-grid container">
        <div className="hero-content">
          <p className="hero-title">
            <span className="micro-dot" />
            Frontend Software Engineer
          </p>

          <p class="hero-stack">JavaScript • React • Tailwind CSS</p>
        </div>

        <h1 className="hero-headline">
          Engineering Thoughtful Digital Experiences
        </h1>

        <p className="hero-description">
          I bring ideas to life by building responsive web interfaces. <br /> I
          focus on using modern technologies and writing clean, maintainable
          code so that every experience feels smooth, fast, and enjoyable for
          users.
        </p>

        <div className="hero-actions">
          <a className="btn primary" href="#contact">
            Get In Touch
          </a>

          <a
            className="btn secondary"
            href="https://drive.google.com/file/d/1420BUUvPp1ksRlgv1rJubHyXqfhzdBhL/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
        </div>

        <div className="hero-right" aria-hidden="false">
          <div className="my-hero-card">
            <img
              className={`hero-image ${imgLoaded ? 'loaded' : ''}`}
              src="/images/my-image.png"
              alt="My professional headshot reference"
              onLoad={() => setImgLoaded(true)}
              fetchPriority="high"
            />

            <div className="my-info-data">
              <p className="card-name">Martins Nnaukwu</p>

              <div className="role-list">
                <span className="role-item">
                  <CodeIcon size={18} />
                  Frontend Developer
                </span>

                <span className="role-item">
                  <ReactIcon size={18} />
                  React
                </span>

                <span className="role-item">
                  <LayoutIcon size={18} />
                  UI Engineering
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
