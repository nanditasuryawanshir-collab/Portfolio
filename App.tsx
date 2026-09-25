import photoUrl from "./imports/9420C17A-9C21-487B-B738-D222C3FB4278.jpeg";
import resumeUrl from "./imports/NanditaSuryawanshi-1.pdf?url";

const Arrow = ({ down = false }: { down?: boolean }) => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    {down ? (
      <path d="M10 3v11m0 0 4-4m-4 4-4-4M4 17h12" />
    ) : (
      <path d="M4 16 16 4M7 4h9v9" />
    )}
  </svg>
);

const SectionHeading = ({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text?: string;
}) => (
  <div className="section-heading">
    <p className="section-label">{label}</p>
    <div>
      <h2>{title}</h2>
      {text && <p className="section-intro">{text}</p>}
    </div>
  </div>
);

const experiences = [
  {
    period: "June 2026 — Present",
    role: "Software Engineer · Student Assistant",
    company: "California State University, Fullerton",
    bullets: [
      "Develop and maintain responsive interfaces with React, JavaScript, HTML5, and CSS3 across the college website.",
      "Manage 15+ department web pages while maintaining 100% WCAG, ATI, and ADA compliance.",
      "Design and prototype layouts in Figma and Canva, then manage publishing and maintenance through Omni CMS.",
      "Troubleshoot frontend issues, publish new department pages, and modernize legacy web content.",
    ],
    highlight: "15+ accessible web properties",
  },
  {
    period: "January 2025 — January 2026",
    role: "Software Engineer II",
    company: "R Systems International",
    bullets: [
      "Developed production backend services using Java, Python, and SQL for a large telecom client.",
      "Built Spring Boot microservices with Hibernate and JPA, following clean MVC architecture and Maven-based workflows.",
      "Created an internal tracking tool that streamlined operational workflows and improved team efficiency.",
      "Resolved 50+ performance issues across backend services, improving system stability and reliability.",
    ],
    highlight: "50+ performance issues resolved",
  },
  {
    period: "July 2023 — July 2024",
    role: "Software Developer",
    company: "Metamorphosys Technologies",
    bullets: [
      "Developed Spring Boot services and REST API integrations for scalable business functionality.",
      "Contributed production code in Java, Python, and SQL across the product development lifecycle.",
      "Wrote JUnit test suites achieving 90%+ coverage and reducing regression defects.",
      "Participated in architecture and design reviews to improve product performance.",
    ],
    highlight: "90%+ test coverage",
  },
];

const skillGroups = [
  {
    title: "Programming",
    skills: ["Java", "Python", "C++", "C", "JavaScript", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Backend engineering",
    skills: ["Spring", "Spring Boot", "Spring Cloud", "Microservices", "REST APIs", "Hibernate", "JPA", "Maven", "MVC", "JWT", "OAuth"],
  },
  {
    title: "Frontend & quality",
    skills: ["React.js", "Bootstrap", "WCAG / ADA", "JUnit", "Mockito", "Figma", "Omni CMS", "Unit Testing"],
  },
  {
    title: "Data & machine learning",
    skills: ["MySQL", "Oracle", "NumPy", "Pandas", "Scikit-learn", "PyTorch", "TensorFlow", "Matplotlib", "Jupyter Lab", "Predictive Analytics"],
  },
  {
    title: "Tools & practices",
    skills: ["Git", "CI/CD", "JIRA", "Postman", "Agile / Scrum", "SLF4J", "Log4j", "System Design", "Data Structures & Algorithms"],
  },
];

export default function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>

      <header className="topbar">
        <a className="brand" href="#home" aria-label="Nandita Suryawanshi, home">
          <span className="brand-mark">NS</span>
          <span className="brand-copy">
            <strong>Nandita Suryawanshi</strong>
            <small>Software Engineer</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-button" href={resumeUrl} target="_blank" rel="noreferrer">
          Résumé <Arrow down />
        </a>
      </header>

      <main id="main-content">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-copy">
            <div className="availability">
              <span aria-hidden="true" />
              <p>Based in Fullerton, CA · Open to opportunities</p>
            </div>
            <p className="kicker">SOFTWARE ENGINEER · BACKEND · FULL-STACK</p>
            <h1 id="hero-title">
              Building resilient systems and <span>inclusive digital experiences.</span>
            </h1>
            <p className="hero-summary">
              I&apos;m Nandita, a software engineer and M.S. Computer Science
              student creating scalable backend services, reliable
              microservices, and accessible web products.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View selected work <Arrow />
              </a>
              <a className="button button-secondary" href={resumeUrl} download>
                Download résumé <Arrow down />
              </a>
            </div>
            <div className="hero-links" aria-label="Contact links">
              <a href="mailto:nanditasuryawanshir@gmail.com">Email</a>
              
              <a href="https://www.linkedin.com/in/nandita-suryawanshi-a45054224" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="portrait-wrap">
            <div className="portrait-frame">
              <img
                src={photoUrl}
                alt="Nandita Suryawanshi smiling at the beach"
              />
              <div className="portrait-shade" aria-hidden="true" />
              <div className="portrait-caption">
                <span>Currently</span>
                <strong>M.S. Computer Science</strong>
                <p>California State University, Fullerton</p>
              </div>
            </div>
            <div className="photo-accent photo-accent-one" aria-hidden="true" />
            <div className="photo-accent photo-accent-two" aria-hidden="true" />
            <div className="experience-pill">
             
              <span><br />Experience working as software Engineer</span>
            </div>
          </div>
        </section>

        <section className="impact-bar" aria-label="Career highlights">
          <div>
            <strong>50+</strong>
            <span>Backend performance issues resolved</span>
          </div>
          <div>
            <strong>90%+</strong>
            <span>Unit test coverage achieved</span>
          </div>
          <div>
            <strong>15+</strong>
            <span>Department pages managed</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>WCAG compliance delivered</span>
          </div>
        </section>

        <section className="section about-section" id="about">
          <SectionHeading
            label="01 · ABOUT"
            title="Engineering with purpose, precision, and people in mind."
          />
          <div className="about-grid">
            <p className="about-lead">
              I turn complex technical challenges into dependable,
              human-centered software.
            </p>
            <div className="about-copy">
              <p>
                My experience spans scalable Java and Spring Boot services,
                database optimization, REST API design, and responsive React
                interfaces. I care equally about system reliability and the
                experience of the people using what I build.
              </p>
              <p>
                Currently pursuing an M.S. in Computer Science, I&apos;m
                deepening my expertise in AI, machine learning, advanced
                databases, software architecture, and ethical engineering.
              </p>
            </div>
            <div className="principles">
              <article>
                <span>01</span>
                <h3>Build for scale</h3>
                <p>Modular architecture, clean APIs, and optimized data access.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Design for everyone</h3>
                <p>Accessible, responsive interfaces that meet WCAG standards.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Measure the impact</h3>
                <p>Performance, quality, and reliability backed by clear results.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <SectionHeading
            label="02 · EXPERIENCE"
            title="Work experience"
            text="From backend microservices to accessible web platforms, I build software that performs reliably in the real world."
          />
          <div className="experience-list">
            {experiences.map((experience, index) => (
              <article className="experience-card" key={experience.company}>
                <div className="experience-index">0{index + 1}</div>
                <div className="experience-meta">
                  <p>{experience.period}</p>
                  <span>{experience.highlight}</span>
                </div>
                <div className="experience-content">
                  <h3>{experience.role}</h3>
                  <p className="company">{experience.company}</p>
                  <ul>
                    {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <SectionHeading
            label="03 · PROJECTS & RESEARCH"
            title="Selected work at the intersection of systems and data."
          />
          <div className="projects-grid">
            <article className="project-card project-featured">
              <div className="project-topline">
                <span>Full-stack application</span>
                <strong>01</strong>
              </div>
              <div className="project-visual portal-visual" aria-hidden="true">
                <div className="browser">
                  <div className="browser-bar"><i /><i /><i /></div>
                  <div className="browser-body">
                    <div className="mock-sidebar"><b /><b /><b /></div>
                    <div className="mock-content"><b /><i /><i /><span /><span /></div>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <p className="project-number">PROJECT 01</p>
                <h3>Student Education Website</h3>
                <p>
                  A secure platform for managing student profiles, courses, and
                  enrollment data. Built with a modular MVC architecture,
                  role-based JWT authentication, optimized MySQL queries, JUnit
                  tests, and SLF4J logging.
                </p>
                <div className="tag-list">
                  <span>React.js</span><span>Spring Boot</span><span>REST APIs</span>
                  <span>JWT</span><span>MySQL</span><span>JUnit</span>
                </div>
              </div>
            </article>

            <article className="project-card project-research">
              <div className="project-topline">
                <span>Published research · IJIRCCE</span>
                <strong>02</strong>
              </div>
              <div className="project-visual data-visual" aria-hidden="true">
                <div className="metric"><strong>90.16%</strong><span>Accuracy</span></div>
                <div className="metric"><strong>91.85%</strong><span>Precision</span></div>
                <svg viewBox="0 0 500 160" preserveAspectRatio="none">
                  <path d="M0 128C45 130 58 70 104 88s54 42 99 15 57-74 100-43 51 68 94 25 58-38 103-66" />
                </svg>
              </div>
              <div className="project-content">
                <p className="project-number">RESEARCH 02</p>
                <h3>Heart Disease Prediction</h3>
                <p>
                  Advanced ML classifiers and ensemble techniques for enhanced
                  predictive accuracy. Combined Naive Bayes, Random Forest, and
                  KNN with hyperparameter tuning, stratified sampling, and
                  feature engineering.
                </p>
                <div className="publication">
                  <span>Published September 2024</span>
                  <strong>IJIRCCE · Vol. 12, Issue 9 · Impact Factor 8.625</strong>
                </div>
                <div className="tag-list">
                  <span>Python</span><span>Scikit-learn</span><span>Random Forest</span>
                  <span>KNN</span><span>Predictive Analytics</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <SectionHeading
            label="04 · TECHNICAL TOOLKIT"
            title="A practical stack for building end-to-end products."
          />
          <div className="skill-groups">
            {skillGroups.map((group, index) => (
              <article className="skill-group" key={group.title}>
                <span>0{index + 1}</span>
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section" id="education">
          <SectionHeading
            label="05 · EDUCATION & RECOGNITION"
            title="Always learning. Always contributing."
          />
          <div className="education-grid">
            <div className="education-column">
              <p className="column-label">EDUCATION</p>
              <article>
                <span>January 2026 — January 2028</span>
                <h3>Master of Science in Computer Science</h3>
                <p>California State University, Fullerton</p>
                <small>AI · Machine Learning · Advanced DBMS · Software Architecture · Ethical Software Engineering · Web Development</small>
              </article>
              <article>
                <span>August 2019 — June 2023</span>
                <h3>Bachelor of Engineering in Computer Science</h3>
                <p>Savitribai Phule Pune University</p>
                <small>CGPA 8.32 / 10</small>
              </article>
            </div>
            <div className="education-column recognition-column">
              <p className="column-label">LEADERSHIP & RECOGNITION</p>
              <article>
                <span>AWARD</span>
                <h3>First Place, Web Designing Competition</h3>
                <p>National-Level Technical Symposium · K.K.W.I.E.E.R.</p>
              </article>
              <article>
                <span>CERTIFICATION</span>
                <h3>Advanced Certificate in Back-End Software Development</h3>
                <p>IIT Roorkee · 83.48%</p>
              </article>
              <article>
                <span>COMMUNITY</span>
                <h3>Active Member</h3>
                <p>Women in Computer Science and Engineering (WiCSE) · Associated Students, Inc. (ASI)</p>
              </article>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy">
            <p className="section-label">06 · GET IN TOUCH</p>
            <h2>Let&apos;s build something dependable together.</h2>
            <p>
              I&apos;m interested in software engineering opportunities where I
              can contribute to thoughtful products, strong systems, and
              inclusive user experiences.
            </p>
          </div>
          <div className="contact-card">
            <a href="mailto:nanditasuryawanshir@gmail.com">
              <span>Email</span>
              <strong>nanditasuryawanshir@gmail.com</strong>
              <Arrow />
            </a>
            
            <a href="https://www.linkedin.com/in/nandita-suryawanshi-a45054224" target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
              <strong>Connect professionally</strong>
              <Arrow />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <a className="footer-brand" href="#home">NS</a>
        <p>© {new Date().getFullYear()} Nandita Suryawanshi</p>
        <p>Software Engineer · Fullerton, California</p>
        <a href="#home">Back to top <span aria-hidden="true">↑</span></a>
      </footer>
    </div>
  );
}
