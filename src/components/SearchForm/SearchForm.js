import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import {useState, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {updateSearchstring} from "../../redux/store";

const SearchForm = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateSearchstring(''));
  }, [dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSearchstring(search));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <TextInput placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)}/>
      <Button type="submit">
        <span className="fa fa-search"/>
      </Button>
    </form>
  );
};

export default SearchForm;