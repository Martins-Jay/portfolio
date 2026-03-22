import ProjectImages from '../../../reusables/ProjectImages/ProjectImages';

import './projectRow.css';

function ProjectRow({ projectObj }) {
  return (
    <div className="work-card word-card-with-preview">
      <div className="project-images-wrapper">
        <ProjectImages projectImg={projectObj.images} />
      </div>

      <div className="work-body">
        <div className="project-details-wrpper">
          <div className="project-header-wrapper">
            <div className="logo-initials">{projectObj.logoInitials}</div>

            <div className="header-content">
              <p className="project-title">{projectObj.title}</p>

              {projectObj.subtitle ? (
                <p className="muted-subtitle">{projectObj.subtitle}</p>
              ) : null}
            </div>
          </div>

          <p className="muted-description" style={{ whiteSpace: 'pre-line' }}>
            {projectObj.description}
          </p>

          <div className="stack-section">
            <div className="stack-wrapper">
              {projectObj.stack.map((stack) => (
                <span className="stack-pill">{stack}</span>
              ))}
            </div>
          </div>

          <div className="project-actions">
            <button className="btn secondary len1" type="button">
              Case study
            </button>

            <a href={projectObj.links.live} target="blank" rel="morefferer">
              <button className="btn primary len1" type="button">
                Visit website
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectRow;
