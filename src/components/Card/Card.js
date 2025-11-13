import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';
import { removeCard } from "../../redux/cardsRedux";
import clsx from 'clsx';

const Card = ({ title, id, isFavorite }) => {
  const dispatch = useDispatch();
  console.log('isFavorite?', id, isFavorite);
  return (
    <li className={styles.card}>
      {title}
      <div className={styles.buttons}>
        <button
          onClick={() => dispatch(toggleCardFavorite(id))}
          className={clsx(styles.button, isFavorite && styles.isFavorite)}
        >
          <i className="fa fa-star-o"/>
        </button>
        <button
          onClick={() => dispatch(removeCard(id))}
          className={styles.button}
        >
          <i className="fa fa-trash"/>
        </button>
      </div>
    </li>

  );
};

export default Card;