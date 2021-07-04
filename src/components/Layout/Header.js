import classes from './Header.module.css';

const Header = (props) => {
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
        />
      </div>
    </div>
  );
};

export default Header;
