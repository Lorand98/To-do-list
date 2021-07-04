const ListsContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default ListsContext;
