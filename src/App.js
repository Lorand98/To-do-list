import { useState } from 'react';
import Lists from './components/Lists/Lists';
import Header from './components/Layout/Header';
import ListAdder from './components/Layout/ListAdder';
import ListProvider from './store/ListsProvider';
function App() {
  const [addNewList, setAddNewList] = useState(false);

  return (
    <ListProvider>
      {addNewList && <ListAdder onClose={setAddNewList.bind(null, false)} />}
      <Header onAdd={setAddNewList.bind(null, true)} />
      <Lists />
    </ListProvider>
  );
}

export default App;
