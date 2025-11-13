import styles from "../Favorite/Favorite.module.scss";
import { useSelector } from 'react-redux';
import {getFavoriteCards} from '../../redux/store';
import PageTitle from "../PageTitle/PageTitle";
import Card from '../Card/Card';

const Favorite = () => {

  // const favoriteCards = useSelector(state => getFavoriteCards(state, props.id));
  const favoriteCards = useSelector(getFavoriteCards);
  console.log(favoriteCards);
  return (
    <div>
      <PageTitle>FAVORITE</PageTitle>
      <div className={styles.text}>
        <p>Lorem Impus</p>
      </div>
      <ul className={styles.fcards}>
        {favoriteCards.map(card => (
          <Card  key={card.id}  {...card} />
        ))}
      </ul>
    </div>
  );
};

export default Favorite;