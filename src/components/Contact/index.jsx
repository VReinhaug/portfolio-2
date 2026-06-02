import styles from "./Contact.module.css";

function Contact() {
  return (
    <section id="contact">
      <div className={`container ${styles.content}`}>
        <h2>Contact</h2>

        <p>
          Feel free to reach out if you'd like to collaborate or just say hi.
        </p>

        <div className={styles.links}>
          <a href="https://github.com/VReinhaug" target="_blank">
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/veronika-reinhaug/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
