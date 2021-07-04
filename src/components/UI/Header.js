import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
      <h1>React To Do List</h1>
      <input
        className={classes['search-input']}
        placeholder='Search for a to do list...'
      />
    </div>
  );
};

export default Header;
