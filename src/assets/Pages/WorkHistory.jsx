import { projects, declaration } from '../data/Projects';
import Footer from '../Components/Footer'
import SEO from '../Components/SEO'

function WorkHistory() {
  return (
    <>
            <SEO 
                title="Work History - Emily Mahlehu Mlotshywa (Pty) Ltd"
                description="Explore our completed projects and achievements in industrial cleaning, transportation, and civil construction across South Africa."
                canonical="https://yourdomain.com/work-history"
            />
    <div className='wrap'>
      <div className="projects-container">
        <p className="text002">WORK</p>
        <p className="text003">WORK HISTORY</p>
        <p className="thick-line"></p>
        
        <div className="work-history-layout">
          <div className="work-history-left">
            <div className="timeline">
              {projects.map((project, index) => (
                <div key={project.id} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-circle"></div>
                    {index < projects.length - 1 && <div className="timeline-line"></div>}
                  </div>
                  <div className="timeline-content">
                    <h3 className="job-title">{project.roles}</h3>
                    <p className="company-name">{project.client}</p>
                    <p className="job-period">Duration: {project.duration}</p>
                    <p className="project-title">{project.title}</p>
                    <ul className="achievements-list">
                      {project.scope.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <div className="contact-info">
                      <p>Contact: {project.contact.name}</p>
                      <p>Position: {project.contact.position}</p>
                      <p>Phone: {project.contact.phone}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Projects in Cards */}
          <div className="projects-right">
            <p className='declaration-text'>{declaration}</p>
            <div className="projects-list">
              {projects.map(project => (
                <div key={project.id} className="project-card">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-client">Client: {project.client}</p>
                  <p className="project-personnel">Personnel: {project.personnel.join(', ')}</p>
                  <p className="project-role">Role: {project.roles}</p>
                  <p className="project-duration">Duration: {project.duration}</p>
                  
                  <div className="scope-section">
                    <h4>Scope of Work:</h4>
                    <ul className="scope-list">
                      {project.scope.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="contact-section">
                    <h4>Contact:</h4>
                    <p>{project.contact.name} - {project.contact.position}</p>
                    <p>Phone: {project.contact.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
          <section id="contact">
          <Footer />
        </section>
        </>
  );
}

export default WorkHistory;