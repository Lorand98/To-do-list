import { useContext, useState } from 'react';
import ListsContext from '../../store/lists-context';
import classes from './ToDoItem.module.css';

const ToDoItem = (props) => {
  const listsCtx = useContext(ListsContext);

  const [removed, setRemoved] = useState(false);
  const onRemove = () => {
    setRemoved(true);
  };

  const handleCheckboxClick = () => {
    onRemove();

    setTimeout(() => {
      listsCtx.removeItem(props.listId, props.id);
    }, 300);
  };

  return (
    <div
      className={`${classes['item-container']} ${
        removed && classes['fade-out']
      }`}
    >
      <input type='checkbox' onClick={handleCheckboxClick} />
      <li className={classes.item}>{props.text}</li>
    </div>
  );
};

export default ToDoItem;
