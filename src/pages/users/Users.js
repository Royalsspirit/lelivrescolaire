import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { getUsers, deleteUser, addUser } from './Users.action.js';
import Error from '../../components/Modal.js';

const Users = () => {
  const defaultState = {
    id: '',
    name: '',
    lastname: '',
    address: '',
    city: '',
    postcode: '',
  };

  const dispatch = useDispatch();
  const [state, setState] = useState(defaultState);
  const [modal, setModal] = useState({
    open: false,
    message: '',
  });
  const { students, studentsError } = useSelector(
    (currentState) => ({
      students: currentState.users.students,
      studentsError: currentState.users.error,
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteUser(id, students));
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };
  const handleAdd = () => {
    const currentState = Object.entries(state).find(([, value]) => {
      return value == '';
    });
    if (currentState) {
      setModal({ open: true, message: 'Fill in all mandatory fields' });
    } else {
      dispatch(addUser(state, students));
      setState(defaultState);
    }
  };
  if (studentsError) {
    return <Error message={studentsError} />;
  }
  const handleClose = () => {
    setModal(false);
  };
  return (
    <div>
      {modal.open ? (
        <Error message={modal.message} handleClose={handleClose} show={modal.open} />
      ) : (
        ''
      )}
      <Row>
        <Col md={4}>
          <h1>Students list</h1>
        </Col>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Postcode</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students &&
            students.map((v, k) => {
              return (
                <tr key={k}>
                  <td>{v.id}</td>
                  <td>{v.name}</td>
                  <td>{v.lastname}</td>
                  <td>{v.address}</td>
                  <td>{v.postcode}</td>
                  <td>{v.city}</td>
                  <td>
                    <Button onClick={() => handleDelete(v.id)} variant="danger">
                      {' '}
                      Delete{' '}
                    </Button>
                  </td>
                </tr>
              );
            })}
          <tr>
            <td>
              <Form.Control type="text" name="id" value={state.id} onChange={handleChange} />
            </td>
            <td>
              <Form.Control type="text" name="name" value={state.name} onChange={handleChange} />
            </td>
            <td>
              <Form.Control
                type="text"
                name="lastname"
                value={state.lastname}
                onChange={handleChange}
              />
            </td>
            <td>
              <Form.Control
                type="text"
                name="address"
                value={state.address}
                onChange={handleChange}
              />
            </td>
            <td>
              <Form.Control
                type="text"
                name="postcode"
                value={state.postcode}
                onChange={handleChange}
              />
            </td>
            <td>
              <Form.Control type="text" name="city" value={state.city} onChange={handleChange} />
            </td>
            <td>
              <Button variant="primary" onClick={() => handleAdd()}>
                save
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default Users;
