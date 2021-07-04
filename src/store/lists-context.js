import React from 'react';

const ListsContext = React.createContext({
  lists: [],
  addList: (list) => {},
  removeList: (id) => {},
});

export default ListsContext;
