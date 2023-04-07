import React from "react";
import "../portfolio/portfoliostyle.css";

const Portfolio = () => {
  return (
    <div className="portfolio-font">
      <section className="welcome-section">
        <h1>Hello I'm Arun</h1>
        <p>UI/UX Web Graphic Designer and web developer</p>
      </section>

      <section id="projects" className="projects-section">
        <h1 className="projects-section-header">My Portfolio</h1>

        <div className="projects-grid">
          <a
            href="https://www.behance.net/gallery/140535431/wedly"
            target="_blank"
            className="project project-tile one"
          >
            <img
              className="project-image"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/c56472140535431.6245a85e87eb7.jpg"
              alt="project"
            />
            <p className="project-title">Wedly</p>
          </a>
          <a
            href="https://www.behance.net/gallery/119372981/Astroiyer"
            target="_blank"
            className="project project-tile two"
          >
            <img
              className="project-image"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/1cb06e119372981.609cd8a787e82.gif"
              alt="project"
            />
            <p className="project-title">Astroiyer</p>
          </a>
          <a
            href="https://www.behance.net/gallery/118469839/TruGated"
            target="_blank"
            className="project project-tile three"
          >
            <img
              className="project-image"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/153515118469839.6089a694b852c.jpg"
              alt="project"
            />
            <p className="project-title">TruGated</p>
          </a>
          <a
            href="https://www.behance.net/gallery/61476577/Dchicks"
            target="_blank"
            className="project project-tile four"
          >
            <img
              className="project-image"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/a287be61476577.5a7013a08dbc8.jpg"
              alt="project"
            />
            <p className="project-title">Dchicks</p>
          </a>
          <a
            href="https://www.behance.net/gallery/118469135/Trumarket-Home-page"
            target="_blank"
            className="project project-tile five"
          >
            <img
              className="project-image"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/4b3713118469135.6089a3fd10d13.jpg"
              alt="project"
            />
            <p className="project-title">Trumarket</p>
          </a>
          <a
            href="https://www.behance.net/gallery/162631281/7vachan-wedshop"
            target="_blank"
            className="project project-tile six"
          >
            <img
              className="project-image"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/0e3e1d162631281.63d9124bae786.png"
              alt="project"
            />
            <p className="project-title">7Vachan</p>
          </a>
        </div>

        <a
          href="https://www.behance.net/sreeramadasuarun"
          className="btn btn-show-all"
          target="_blank"
        >
          Show all<i className="fa fa-chevron-right"></i>
        </a>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-section-header">
          <h2 className="contact-head">Let's work together...</h2>
          <p>Follow me on</p>
        </div>
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/sreeramadasu-arun-7171621b7/"
            target="_blank"
            className="sociallinks contact-details"
          >
            <i className="fa fa-linkedin"></i> Linkedin
          </a>
          <a
            id="profile-link"
            href="https://github.com/sreeramadasuarun"
            target="_blank"
            className="sociallinks contact-details"
          >
            <i className="fa fa-github"></i> GitHub
          </a>

          <a
            href="https://www.behance.net/sreeramadasuarun"
            className="sociallinks contact-details"
          >
            <i className="fa fa-behance"></i> Behance
          </a>
        </div>
      </section>

      <footer>
        <p>*All the projects and contact details given are real.</p>
        <p>&copy; Design inspired by freeCodeCamp</p>
      </footer>
    </div>
  );
};

export default Portfolio;
