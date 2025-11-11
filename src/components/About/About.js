import styles from "../About/About.module.scss";
import PageTitle from "../PageTitle/PageTitle";

const About = () => {
  return (
    <div>
        <PageTitle>ABOUT</PageTitle>
        <div className={styles.text}>
          <p>Lorem Impus</p>
        </div>
    </div>
  );
};

export default About;