import { useReducer } from 'react';
import ListContext from './lists-context';
import { cloneDeep } from 'lodash';

const ACTION = {
  ADDLIST: 'ADDLIST',
  REMOVELIST: 'REMOVELIST',
  CHANGELISTTITLE: 'CHANGETITLE',
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

const listsReducer = (state, action) => {
  switch (action.type) {
    case ACTION.ADDLIST: {
      const updatedLists = [...state, action.newList];
      return updatedLists;
    }
    case ACTION.REMOVELIST: {
      const updatedLists = state.filter((list) => {
        return list.id !== action.listToRemoveId;
      });

      return updatedLists;
    }
    case ACTION.CHANGELISTTITLE: {
      const listToUpdateIndex = state.findIndex(
        (list) => list.id === action.payLoad.id
      );

      console.log(action.payLoad.name);
      const listsCopy = cloneDeep(state);

      const listToUpdate = listsCopy[listToUpdateIndex];

      const updatedList = {
        ...listToUpdate,
        name: action.payLoad.name,
      };

      listsCopy[listToUpdateIndex] = updatedList;

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
      payLoad: {
        id: id,
        name: name,
      },
    });
  };

  const listsContext = {
    lists: listsState,
    addList: addList,
    removeList: removeList,
    changeListName: changeListName,
  };

  return (
    <ListContext.Provider value={listsContext}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListsProvider;
