import { cloneDeep } from 'lodash';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './Lists.module.css';

import ToDoList from './ToDoList';
import { useContext } from 'react';
import ListsContext from '../../store/lists-context';

import Footer from '../Layout/Footer';

const LISTS_IN_A_ROW = 3;

const Lists = () => {
  const listsCtx = useContext(ListsContext);

  let searchedListResult = cloneDeep(listsCtx.lists);

  if (listsCtx.searchedList.trim() !== '') {
    searchedListResult = listsCtx.lists.filter((toDoList) => {
      return toDoList.name
        .toLowerCase()
        .includes(listsCtx.searchedList.toLowerCase());
    });
  }

  return (
    <section className={classes.section}>
      <Container>
        {searchedListResult.length > 0 ? (
          <Row>
            {searchedListResult.map((toDoList) => (
              <Col key={toDoList.id} lg={12 / LISTS_IN_A_ROW}>
                <ToDoList {...toDoList} onRemove={listsCtx.removeList} />
              </Col>
            ))}
          </Row>
        ) : (
          <p className={classes['no-list__error']}>
            Unfortunately we couldn't find any lists.
          </p>
        )}
      </Container>
      <Footer />
    </section>
  );
};

export default Lists;
