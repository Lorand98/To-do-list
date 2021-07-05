import { useEffect, useReducer } from 'react';
import ListContext from './lists-context';
import { cloneDeep } from 'lodash';

const ACTION = {
  SETSTOREDLISTS: 'SETSTOREDLISTS',
  ADDLIST: 'ADDLIST',
  REMOVELIST: 'REMOVELIST',
  CHANGELISTTITLE: 'CHANGETITLE',
  ADDITEM: 'ADDITEM',
  REMOVEITEM: 'REMOVEITEM',
};

const DEFAULT_LISTS = [
  {
    id: 't1',
    name: 'Personal',
    items: [],
  },
  {
    id: 't2',
    name: 'Shopping',
    items: [],
  },
  {
    id: 't3',
    name: 'Work',
    items: [],
  },
];

const setStoredLists = (lists) => {
  localStorage.setItem('storedLists', JSON.stringify(lists));
};

const listFinder = (lists, id) => {
  const listToUpdateIndex = lists.findIndex((list) => list.id === id);

  return {
    listToUpdateIndex: listToUpdateIndex,
    listToUpdate: lists[listToUpdateIndex],
  };
};

const listsReducer = (state, action) => {
  switch (action.type) {
    case ACTION.SETSTOREDLISTS: {
      return action.lists;
    }

    case ACTION.ADDLIST: {
      const updatedLists = [...state, action.newList];
      setStoredLists(updatedLists);
      return updatedLists;
    }
    case ACTION.REMOVELIST: {
      const updatedLists = state.filter((list) => {
        return list.id !== action.listToRemoveId;
      });
      setStoredLists(updatedLists);
      return updatedLists;
    }
    case ACTION.CHANGELISTTITLE: {
      let listsCopy = cloneDeep(state);

      const { listToUpdateIndex, listToUpdate } = listFinder(
        listsCopy,
        action.payload.id
      );

      const updatedList = {
        ...listToUpdate,
        name: action.payload.name,
      };

      listsCopy[listToUpdateIndex] = updatedList;
      setStoredLists(listsCopy);
      return listsCopy;
    }

    case ACTION.ADDITEM: {
      let listsCopy = cloneDeep(state);

      const { listToUpdateIndex, listToUpdate } = listFinder(
        listsCopy,
        action.payload.id
      );

      const updatedList = {
        ...listToUpdate,
        items: [...listToUpdate.items, action.payload.item],
      };

      listsCopy[listToUpdateIndex] = updatedList;
      setStoredLists(listsCopy);
      return listsCopy;
    }

    case ACTION.REMOVEITEM: {
      let listsCopy = cloneDeep(state);

      const { listToUpdateIndex } = listFinder(
        listsCopy,
        action.payload.listId
      );

      const updatedItems = listsCopy[listToUpdateIndex].items.filter(
        (item) => item.id !== action.payload.id
      );

      listsCopy[listToUpdateIndex].items = updatedItems;

      setStoredLists(listsCopy);
      return listsCopy;
    }

    default: {
      return state;
    }
  }
};

const ListsProvider = (props) => {
  const [listsState, dispatchListsAction] = useReducer(
    listsReducer,
    DEFAULT_LISTS
  );

  const setStoredList = (lists) => {
    dispatchListsAction({ type: ACTION.SETSTOREDLISTS, lists: lists });
  };

  useEffect(() => {
    const storedLists = JSON.parse(localStorage.getItem('storedLists'));

    if (storedLists.length > 0) {
      setStoredList(storedLists);
    }
  }, []);

  const addList = (list) => {
    dispatchListsAction({ type: ACTION.ADDLIST, newList: list });
  };

  const removeList = (listToRemoveId) => {
    dispatchListsAction({
      type: ACTION.REMOVELIST,
      listToRemoveId: listToRemoveId,
    });
  };

  const changeListName = (id, name) => {
    dispatchListsAction({
      type: ACTION.CHANGELISTTITLE,
      payload: {
        id: id,
        name: name,
      },
    });
  };

  const addItem = (listId, item) => {
    dispatchListsAction({
      type: ACTION.ADDITEM,
      payload: {
        id: listId,
        item: item,
      },
    });
  };

  const removeItem = (listId, id) => {
    dispatchListsAction({
      type: ACTION.REMOVEITEM,
      payload: {
        listId: listId,
        id: id,
      },
    });
  };

  const listsContext = {
    lists: listsState,
    addList: addList,
    removeList: removeList,
    changeListName: changeListName,
    addItem: addItem,
    removeItem: removeItem,
  };

  return (
    <ListContext.Provider value={listsContext}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListsProvider;
