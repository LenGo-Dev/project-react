import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';
import clsx from 'clsx';

const Card = ({ title, id, isFavorite }) => {
  const dispatch = useDispatch();
  console.log('isFavorite?', id, isFavorite);
  return (
    <li className={styles.card}>
      {title}
      <button
        onClick={() => dispatch(toggleCardFavorite(id))}
        className={clsx(styles.button, isFavorite && styles.isFavorite)}
        >
        <i className="fa fa-star-o" />
      </button>
    </li>

  );
};

export default Card;