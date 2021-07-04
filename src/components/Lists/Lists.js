import ToDoList from './ToDoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const LISTS_IN_A_ROW = 3;

const Lists = () => {
  return (
    <Container>
      <Row>
        <Col>
          <ToDoList />
        </Col>
      </Row>
    </Container>
  );
};

export default Lists;
