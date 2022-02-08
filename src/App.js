import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

import SearchForm from './components/SearchForm.js';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>GitHub Repo Search</h1>
    </header>
    <Container className="App-content">
      <Row className="show-grid">
        <Col lg={12}>
          <SearchForm></SearchForm>
        </Col>
      </Row>
    </Container>
    <footer>&copy; 2018 Christopher Davison</footer>
  </div>
)

export default App;
