import SectionHead from '../../reusables/SectionHead';
import CapabilityGroup from './CapabilityGroup/CapabilityGroup';
import { capabilitiesData } from '../../../data/capabilitiesData';

import './coreCapabilities.css'

function CoreCapabilities() {
  return (
    <div id="core-capabilities" className="capabilities-section container">
      <div>
        <SectionHead
          title="Core Capabilities"
          TagLevel="h2"
          subtitle="Technologies, frameworks, and tools I use to design and build modern web applications."
        />

        <div className="capabilities-card">
          {capabilitiesData.map((capabilitiyObj) => (
            <CapabilityGroup
              key={capabilitiyObj.title}
              capabilitiyObj={capabilitiyObj}
            />
          ))}

          <div className="section-divider"></div>
        </div>
      </div>
    </div>
  );
}

export default CoreCapabilities;
// <div className="tech-svg-wrapper">
