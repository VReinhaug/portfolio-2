import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={`container`}>
        <nav>
          <ul className={styles.navList}>
            <li>
              <a href="#about">About me</a>
            </li>

            <li>
              <a href="#projects">My projects</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
