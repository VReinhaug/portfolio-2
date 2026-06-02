import styles from "./About.module.css";
import buttonStyles from "../../styles/buttons.module.css";

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.content}`}>
        <div>
          <p className={styles.subtitle}>Front-end Developer Student</p>

          <h1>
            Hi there, I'm <span>Veronika</span>
          </h1>

          <p className={styles.description}>
            I am a Front-end developer student at Noroff, currently balancing
            studies with working as a Web Manager in Oslo. I enjoy building
            responsive and user-friendly web applications using modern frontend
            technologies, and I’m especially interested in creating great user
            experiences and improving usability.
          </p>

          <a href="#projects" className={buttonStyles.button}>
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
