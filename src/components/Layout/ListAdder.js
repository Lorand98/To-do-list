import { useContext, useRef } from 'react';
import ListsContext from '../../store/lists-context';
import Modal from '../UI/Modal';
import classes from './AdderModifier.module.css';

const ListAdder = (props) => {
  const inputRef = useRef();
  const listsCtx = useContext(ListsContext);
  const submitHandler = (e) => {
    e.preventDefault();
    const newList = {
      id: `t${listsCtx.lists.length + 1}`,
      name: inputRef.current.value,
      items: [],
    };
    listsCtx.addList(newList);

    props.onClose();
  };
  return (
    <Modal onClose={props.onClose}>
      <form className={classes['list-adder-modifier']} onSubmit={submitHandler}>
        <input minLength='1' placeholder='List Name' ref={inputRef} />
        <button className={classes['btn-add-modify']} type='submit'>
          Add
        </button>
      </form>
    </Modal>
  );
};

export default ListAdder;
