import SectionHead from '../../reusables/SectionHead';

import './myProcess.css';

function MyProcess() {
  return (
    <div id="my-process" className="my-process-section container">
      <SectionHead TagLevel="div" title="My Process" subtitle="How I work" />

      {/* <div className="process-banner">
        <img
            className="collabBannerImg"
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
            alt="Team collaboration"
          />
      </div> */}

      <div className="collabBannerImgWrapper" aria-label="Team collaboration">
        <img
          className="collabBannerImg"
          src="collaborating-img.jpg"
          alt="Team collaboration"
          style={{ background: 'var(--container-bg)', borderRadius: '10px' }}
        />
        <div className="collabBannerOverlay">
          <p className="collabBadge">Team-oriented</p>
          <p className="muted collabMini">Clear updates • Open to feedback</p>
        </div>
      </div>
    </div>
  );
}

export default MyProcess;
