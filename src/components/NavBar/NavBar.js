import styles from './NavBar.module.scss';
import Container from "../Container/Container";
// import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.icon}>
            <span className="fa fa-tasks"/>
          </div>

          <ul className={styles.nav}>
            <li>Home</li>
            <li>Favorite</li>
            <li>About</li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;