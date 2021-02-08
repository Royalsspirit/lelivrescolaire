import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Side from './components/Sidebar';
import Header from './components/Header';
import App from './pages/home/App';
import Users from './pages/users/Users.js';

const Routes = () => {
  return (
    <Container fluid className="no-padding">
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Side />
        <Col id="page-content-wrapper">
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/users" component={Users} />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};
export default Routes;
