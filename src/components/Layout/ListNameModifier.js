import { useContext, useState } from 'react';
import Modal from '../UI/Modal';
import ListsContext from '../../store/lists-context';
import classes from './AdderModifier.module.css';

const ListNameModifier = (props) => {
  const listsCtx = useContext(ListsContext);
  const [input, setInput] = useState(props.name);

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    listsCtx.changeListName(props.id, input);
    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <form className={classes['list-adder-modifier']} onSubmit={submitHandler}>
        <input
          minLength='1'
          placeholder='List Name'
          value={input}
          onChange={onInputChange}
          required
        />
        <button className={classes['btn-add-modify']} type='submit'>
          Edit Title
        </button>
      </form>
    </Modal>
  );
};

export default ListNameModifier;
