import ToDoList from './ToDoList';
import { Container, Row, Col } from 'react-bootstrap';
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Lists.module.css';
import ListsContext from '../../store/lists-context';

const LISTS_IN_A_ROW = 3;

const Lists = () => {
  const listsCtx = useContext(ListsContext);

  return (
    <section className={classes.section}>
      <Container>
        <Row>
          {listsCtx.lists.map((toDoList) => (
            <Col key={toDoList.id} lg={12 / LISTS_IN_A_ROW}>
              <ToDoList {...toDoList} onRemove={listsCtx.removeList} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Lists;
