import React, { Component } from 'react';
import {Form, InputGroup, Button} from 'react-bootstrap';
import GitHubRepoSearch from '../libraries/GitHubRepoSearch'

import './SearchForm.css'

export default class SearchForm extends Component {
  constructor(props, context) {
    super(props, context)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      searchQuery: '',    // our search query will be stored here
      searchResults: []   // our search results will end up here
    }
  }

  handleChange(e) {
    // Sets the search query when user input is received
    console.log('handleChange')
    this.setState({ searchQuery: e.target.value });
  }

  handleSearch = e => {
    // When the search button is pressed...
    e.preventDefault() // prevent default form submit behavior
    console.log('handleSearch')
    if (this.state.searchQuery === '') return null // gracefully fail on empty input
    const gh = new GitHubRepoSearch() // make a new search instance
    // Search for our query
    gh.search(this.state.searchQuery).then(res => {
      if (res !== null) { // make sure we have results
        this.setState({searchResults: res.join('\n')}) // output results separated by newlines
      } else {
        this.setState({searchResults: 'Could not get any results from GitHub'})
      }
    })
  }

  render () {
    return (
      <Form action="#" method="post" onSubmit={this.handleSearch}>
        <Form.Group controlId="formSearchCriteria">
          <Form.Label>Search Criteria</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              value={this.state.searchQuery}
              placeholder="Try hello-world or awesome-react"
              onChange={this.handleChange}
            />
            <InputGroup.Append>
              <Button type="submit" variant="success" title="Search">
                Search
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
        <Form.Group controlId="formSearchResultsTextarea">
          <Form.Label>Search Results</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder=""
            readOnly
            className="search-results"
            value={this.state.searchResults}
          />
        </Form.Group>
      </Form>
    )
  }
}