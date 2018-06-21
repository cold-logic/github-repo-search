import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';

import SearchForm from './components/SearchForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>GitHub Repo Search</h1>
        </header>
        <Grid className="App-content">
          <Row className="show-grid">
            <Col lg={12}>
              <SearchForm></SearchForm>
            </Col>
          </Row>
        </Grid>
        <footer>&copy; 2018 Christopher Davison</footer>
      </div>
    );
  }
}

export default App;
