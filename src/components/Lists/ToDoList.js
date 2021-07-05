import { Fragment, useState } from 'react';
import ListNameModifier from '../Layout/ListNameModifier';
import ToDoItem from './ToDoItem';
import classes from './ToDoList.module.css';

import NewItemAdder from '../Layout/NewItemAdder';

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
        <div className={classes['to-do-list__header']}>
          <h1 onClick={() => setEditName(true)}>{props.name}</h1>
          <button onClick={onRemove} className={classes['btn-remove']}>
            Delete
          </button>
        </div>
        <ul>
          {props.items.map((item) => {
            return (
              <ToDoItem
                key={item.id}
                listId={props.id}
                id={item.id}
                text={item.text}
              />
            );
          })}
        </ul>
        <NewItemAdder
          btnAddClass={classes['btn-add__item']}
          listId={props.id}
        />
      </div>
    </Fragment>
  );
};

export default ToDoList;
