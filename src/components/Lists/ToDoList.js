import ToDoItem from './ToDoItem';
import classes from './ToDoList.module.css';

const ToDoList = (props) => {
  return (
    <div className={classes['to-do-list']}>
      <h1>Dummy List</h1>
      <ul>
        <ToDoItem />
      </ul>
    </div>
  );
};

export default ToDoList;
