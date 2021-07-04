import { Fragment, useState } from 'react';
import ListNameModifier from '../Layout/ListNameModifier';
import ToDoItem from './ToDoItem';
import classes from './ToDoList.module.css';

const ToDoList = (props) => {
  const [removed, setRemoved] = useState(false);
  const [editName, setEditName] = useState(false);

  const onRemove = () => {
    setRemoved(true);
    setTimeout(() => {
      props.onRemove(props.id);
    }, 300);
  };

  return (
    <Fragment>
      {editName && (
        <ListNameModifier
          onClose={setEditName.bind(null, false)}
          id={props.id}
          name={props.name}
        />
      )}
      <div
        className={`${classes['to-do-list']} ${removed && classes['fade-out']}`}
      >
        <h1 onClick={() => setEditName(true)}>{props.name}</h1>

        <ul>
          <ToDoItem />
        </ul>
        <button onClick={onRemove} className={classes['btn-remove']}>
          Remove
        </button>
      </div>
    </Fragment>
  );
};

export default ToDoList;
