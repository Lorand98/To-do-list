import ListsContext from './list-context';

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

const ACTION = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  CHANGENAME: 'CHANGENAME',
};

const listsReducer = (state, action) => {
  switch (action.type) {
    case ACTION.ADD: {
      return;
    }
    case ACTION.REMOVE: {
      return;
    }
    case ACTION.CHANGENAME: {
      return;
    }

    default:
      return DEFAULT_LISTS;
  }
};

const ListProvider = (props) => {
  const [listsState, dispatchListsAction] = useReducer(
    listsReducer,
    DEFAULT_LISTS
  );

  const listsContext = {
    items: listsState.items,
  };

  return <ListsContext.Provider>{props.children}</ListsContext.Provider>;
};

export default ListProvider;
