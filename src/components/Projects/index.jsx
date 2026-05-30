import styles from "./Projects.module.css";
import buttonStyles from "../../styles/buttons.module.css";

//import GoodBid from "../../assets/goodbid.jpg";
//import UniMart from "../../assets/unimart.jpg";
//import Holidaze from "../../assets/holidaze.jpg";

const projects = [
  {
    title: "GoodBid",
    //image: GoodBid,
    description:
      "GoodBid is a semester project created as an assignment for Front-End Development studies at Noroff. The application is an auction platform where users can register using a Noroff email address, create listings for items they want to sell, and place bids on listings created by other users.",

    techStack: "HTML5, SCSS, JavaScript, Bootstrap, API",

    github: "https://github.com/VReinhaug/SemesterProject2",

    demo: "https://goodbid.netlify.app/",
  },

  {
    title: "UniMart",
    //image: UniMart,
    description:
      "UniMart is a Course Assignment for JavaScript Frameworks as part of the Front-end Development studies at Noroff. The project is a React-based online store that allows users to browse products, view detailed product information, add items to a shopping cart, and complete a checkout flow.",

    techStack: "React, JavaScript, CSS, API",

    github: "https://github.com/NoroffFEU/jsfw-2025-v1-veronika-jsfw",

    demo: "https://jsfw-veronika.netlify.app/",
  },

  {
    title: "Holidaze",
    //image: Holidaze,
    description:
      "Holidaze is a React-based web application for booking and managing venues for overnight stays. This project was developed as the Project Exam 2 assignment during the Front-end Development program at Noroff. Users can browse venues, view detailed venue information, register an account, and make bookings. Users can also register as Venue Managers, allowing them to create, update, and delete venues, as well as manage bookings for their venues.",

    techStack: "React, JavaScript, Bootstrap, SASS, Yup, API",

    github: "https://github.com/VReinhaug/project-exam-2",

    demo: "https://exam2-veronika.netlify.app/",
  },
];

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className={styles.title}>Projects</h2>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.title} className={styles.card}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.image}
              />

              <div className={styles.content}>
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className={styles.techStack}>
                  <span>{project.techStack}</span>
                </div>

                <div className={styles.links}>
                  <a
                    href={project.github}
                    className={buttonStyles.button}
                    target="_blank"
                  >
                    GitHub Repo
                  </a>

                  <a
                    href={project.demo}
                    className={buttonStyles.button}
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
