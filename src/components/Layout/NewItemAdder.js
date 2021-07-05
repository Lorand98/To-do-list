import { cloneDeep } from 'lodash';
import Input from '../UI/Input';
import addImg from '../../images/plus.png';
import { useContext, useState } from 'react';
import ListsContext from '../../store/lists-context';
import { useRef } from 'react';

const listItemCount = (lists, id) => {
  const listToUpdateIndex = lists.findIndex((list) => list.id === id);

  return lists[listToUpdateIndex].items.length;
};

const NewItemAdder = (props) => {
  const listsCtx = useContext(ListsContext);
  const itemTextRef = useRef();
  const [invalidInput, setInvalidInput] = useState(false);

  const handleAddItem = (e) => {
    e.preventDefault();

    let listsCopy = cloneDeep(listsCtx.lists);

    const itemsCount = listItemCount(listsCopy, props.listId);

    if (itemTextRef.current.value.trim() === '') {
      setInvalidInput(true);
      return;
    }

    setInvalidInput(false);

    listsCtx.addItem(props.listId, {
      id: `${props.listId}${itemsCount + 1}`,
      text: itemTextRef.current.value,
    });

    itemTextRef.current.value = '';
  };

  return (
    <form onSubmit={handleAddItem}>
      <Input placeholder='Enter something... :)' ref={itemTextRef} />
      {invalidInput && (
        <p style={{ color: 'red' }}>Please enter a valid input</p>
      )}
      <button
        type='submit'
        onClick={props.handleShowInput}
        className={props['btnAddClass']}
      >
        <img src={addImg} alt='Add' />
      </button>
    </form>
  );
};

export default NewItemAdder;
