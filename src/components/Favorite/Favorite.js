import styles from "../Favorite/Favorite.module.scss";
import PageTitle from "../PageTitle/PageTitle";


const Favorite = () => {
  return (
    <div>
        <PageTitle>FAVORITE</PageTitle>
        <div className={styles.text}>
          <p>Lorem Impus</p>
        </div>
    </div>
  );
};

export default Favorite;