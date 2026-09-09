import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
} from "react-icons/fa";

import { SiCplusplus } from "react-icons/si";

function Home() {
  return (
    <section id="home" className="container">
      <div className="row align-items-center min-vh-100">
        <div className="col-lg-7">
          <p className="text-info fw-bold">Welcome to my portfolio</p>

          <h1 className="display-3 fw-bold">
            Hi, I'm <span className="text-info">Shabbir</span>
          </h1>

          <h3>Full Stack Web Developer</h3>

          <p className="text-secondary mt-3">
            I create modern, responsive and user-friendly websites using modern
            web technologies.
          </p>

          <a href="#projects"className="btn btn-primary me-3 px-4 py-2 rounded-pill">
            View My Work
          </a>

          <a href="#contact"className="btn btn-outline-info px-4 py-2 rounded-pill">
            Contact Me
          </a>

          <div className="d-flex gap-4 mt-4">
            <a href="#" className="text-light fs-4">
              <FaGithub />
            </a>

            <a href="#" className="text-light fs-4">
              <FaLinkedin />
            </a>

            <a href="#" className="text-light fs-4">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="col-lg-5 text-center mt-5 mt-lg-0">
          <img src="/profile.png"alt="Profile"className="img-fluid rounded-circle"/>
        </div>
      </div>

      <section id="about" className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-5 text-center mb-4 mb-lg-0">
            <div className="p-5 border rounded-4">
              <h2 className="text-info">About Me</h2>
              <p className="mt-3">Full Stack Web Developer</p>
            </div>
          </div>

          <div className="col-lg-7">
            <h2 className="fw-bold fs-1">
              About <span className="text-info">Me</span>
            </h2>
            <h4 className="mt-3">Full Stack Web Developer</h4>

            <p className="text-secondary mt-3">
              I am a passionate Full Stack Web Developer who enjoys creating
              modern and responsive websites. I am currently learning frontend
              and backend technologies and building real-world projects.
            </p>

            <p className="text-secondary">
              My goal is to create clean, user-friendly and professional web
              experiences.
            </p>

            <a href="#contact" className="btn btn-primary mt-2">
              More About Me
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-5 text-center mb-4 mb-lg-0">
            <div className="about-box p-5 rounded-4">

              <h2 className="display-5 fw-bold text-info">1+</h2>
              <p className="text-light fs-5">Years of Learning</p>
              <p className="text-secondary">Building • Learning • Creating</p>
              
            </div>
          </div>

          <div className="col-lg-7">
            <p className="text-info fw-bold">ABOUT ME</p>

            <h2 className="display-5 fw-bold">
              Turning Ideas Into
              <span className="text-info"> Digital Experiences</span>
            </h2>

            <p className="text-secondary mt-4">
              I am a passionate Full Stack Web Developer who enjoys creating
              modern, responsive and user-friendly websites.
            </p>

            <p className="text-secondary">
              I am continuously learning new technologies and working on
              real-world projects to improve my development skills.
            </p>

            <div className="row mt-4">
              <div className="col-4">
                <h3 className="text-info fw-bold">10+</h3>
                <p className="text-secondary">Projects</p>
              </div>

              <div className="col-4">
                <h3 className="text-info fw-bold">5+</h3>
                <p className="text-secondary">Technologies</p>
              </div>

              <div className="col-4">
                <h3 className="text-info fw-bold">100%</h3>
                <p className="text-secondary">Dedication</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">
            My <span className="text-info">Skills</span>
          </h2>
        </div>

        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="skill-card p-4 rounded-4">
              <div className="skill-icon">
                <FaHtml5 />
              </div>

              <h4 className="mt-3">HTML</h4>

              <p className="text-secondary">
                Creating clean and structured web pages.
              </p>

              <div className="progress">
                <div className="progress-bar bg-info"style={{ width: "90%" }}></div>
              </div>

              <div className="d-flex justify-content-between mt-2">
                <small className="text-secondary">HTML</small>
                <small className="text-info">90%</small>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="skill-card p-4 rounded-4">
              <div className="skill-icon">
                <FaCss3Alt />
              </div>

              <h4 className="mt-3">CSS</h4>

              <p className="text-secondary">
                Designing responsive and attractive interfaces.
              </p>

              <div className="progress">
                <div className="progress-bar bg-info"style={{ width: "85%" }}></div>
              </div>

              <div className="d-flex justify-content-between mt-2">
                <small className="text-secondary">CSS</small>
                <small className="text-info">85%</small>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="skill-card p-4 rounded-4">
              <div className="skill-icon">
                <FaJs />
              </div>

              <h4 className="mt-3">JavaScript</h4>

              <p className="text-secondary">
                Building interactive web experiences.
              </p>

              <div className="progress">
                <div className="progress-bar bg-info"style={{ width: "75%" }}></div>
              </div>

              <div className="d-flex justify-content-between mt-2">
                <small className="text-secondary">JavaScript</small>
                <small className="text-info">75%</small>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="skill-card p-4 rounded-4">
              <div className="skill-icon">
                <FaReact />
              </div>

              <h4 className="mt-3">React</h4>

              <p className="text-secondary">
                Developing reusable and responsive interfaces.
              </p>

              <div className="progress">
                <div className="progress-bar bg-info"style={{ width: "70%" }}></div>
              </div>

              <div className="d-flex justify-content-between mt-2">
                <small className="text-secondary">React</small>
                <small className="text-info">70%</small>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="skill-card p-4 rounded-4">
              <div className="skill-icon">
                <FaBootstrap />
              </div>

              <h4 className="mt-3">Bootstrap</h4>

              <p className="text-secondary">
                Creating responsive layouts quickly.
              </p>

              <div className="progress"> 
              <div className="progress-bar bg-info"style={{ width: "85%" }}></div>
              </div>

              <div className="d-flex justify-content-between mt-2">
                <small className="text-secondary">Bootstrap</small>

                <small className="text-info">85%</small>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="skill-card p-4 rounded-4">
              <div className="skill-icon">
                <SiCplusplus />
              </div>

              <h4 className="mt-3">C++</h4>

              <p className="text-secondary">
                Learning programming and data structures.
              </p>

              <div className="progress">
              <div className="progress-bar bg-info"style={{ width: "65%" }}></div>
              </div>

              <div className="d-flex justify-content-between mt-2">
                <small className="text-secondary">C++</small>

                <small className="text-info">65%</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">
            Featured <span className="text-info">Projects</span>
          </h2>
        </div>

        <div className="row g-4">

          <div className="col-lg-4 col-md-6">
            <div className="project-card h-100 rounded-4 overflow-hidden">
              <div className="project-image">
                <img  className="w-100 h-100" src="./E-com.png.png" alt="" />
              </div>

              <div className="p-4">
                <h4 className="fw-bold">E-Commerce Website</h4>

                <p className="text-secondary">
                  A responsive e-commerce project with product management,
                  sorting and interactive features.
                </p>

                <div className="mb-4">
                  <span className="badge bg-info text-dark me-2">HTML</span>
                  <span className="badge bg-info text-dark me-2">CSS</span>
                  <span className="badge bg-info text-dark">JavaScript</span>
                </div>

                <a href="#" className="btn btn-outline-info rounded-pill">
                  View Project
                </a>
              </div>
            </div>
          </div>


          <div className="col-lg-4 col-md-6">
            <div className="project-card h-100 rounded-4 overflow-hidden">
              <div className="project-image">
                <img  className="w-100 h-100" src="./Weather.png.png" alt="" />
              </div>

              <div className="p-4">
                <h4 className="fw-bold">   Weather Application
                </h4>

                <p className="text-secondary">
                  A weather application that uses an API to display real-time
                  weather information.
                </p>

                <div className="mb-4">
                  <span className="badge bg-info text-dark me-2">JavaScript</span>
                  <span className="badge bg-info text-dark me-2">API</span>
                  <span className="badge bg-info text-dark">CSS</span>
                </div>

                <a href="#" className="btn btn-outline-info rounded-pill">
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="project-card h-100 rounded-4 overflow-hidden">
              <div className="project-image">
                <img  className="w-100 h-100" src="./Bike.png.png" alt="" />
              </div>

              <div className="p-4">
                <h4 className="fw-bold">React Bike Website</h4>

                <p className="text-secondary">
                  A modern bike website built using React with a responsive and
                  clean user interface.
                </p>

                <div className="mb-4">
                  <span className="badge bg-info text-dark me-2">React</span>
                  <span className="badge bg-info text-dark me-2">
                    Bootstrap
                  </span>

                  <span className="badge bg-info text-dark">CSS</span>
                </div>

                <a href="#" className="btn btn-outline-info rounded-pill">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">
            Let's Work <span className="text-info">Together</span>
          </h2>
        </div>

        <div className="row g-4">
          <div className="col-lg-5">
            <div className="contact-box p-4 rounded-4 h-100">
              <h3 className="fw-bold">Get In Touch</h3>

              <p className="text-secondary mt-3">
                I am always interested in working on new projects and learning
                new technologies.
              </p>

              <div className="mt-4">
                <p>
                  <strong>Email:</strong><br />shabbir@example.com
                </p>

                <p>
                  <strong>Phone:</strong><br />+91 00000 00000
                </p>

                <p>
                  <strong>Location:</strong><br />Gujarat, India
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="contact-box p-4 rounded-4">
              <form>
                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input type="text" className="form-control" placeholder="Enter your name" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Your Email</label>
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input type="text" className="form-control" placeholder="Enter subject" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control"rows="5"placeholder="Write your message"></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
