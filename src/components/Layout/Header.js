import { useContext } from 'react';
import ListsContext from '../../store/lists-context';
import classes from './Header.module.css';

const Header = (props) => {
  const listsCtx = useContext(ListsContext);

  const handleSearch = (e) => {
    listsCtx.searchList(e.target.value);
  };

  return (
    <div className={classes.header}>
      <h1>React To Do List</h1>
      <div className={classes['add-search']}>
        <button className={classes['new-list']} onClick={props.onAdd}>
          New To Do List
        </button>
        <input
          className={classes['search-input']}
          placeholder='Search for a to do list...'
          onChange={handleSearch}
          value={listsCtx.searchedList}
        />
      </div>
    </div>
  );
};

export default Header;
