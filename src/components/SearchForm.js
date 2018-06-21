import React, { Component } from 'react';
import { ControlLabel, FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';
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
    this.setState({ searchQuery: e.target.value });
  }

  handleSearch = e => {
    // When the search button is pressed...
    e.preventDefault() // prevent default form submit behavior
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
      <form action="#" method="post" onSubmit={this.handleSearch}>
        <FormGroup controlId="formSearchCriteria">
          <ControlLabel>Search Criteria</ControlLabel>
          <InputGroup>
            <FormControl
              type="text"
              value={this.state.searchQuery}
              placeholder="Try hello-world or awesome-react"
              onChange={this.handleChange}
            />
            <InputGroup.Button>
              <Button
                bsStyle="success"
                title="Search"
              >Search</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
        <FormGroup controlId="formSearchResultsTextarea">
          <ControlLabel>Search Results</ControlLabel>
          <FormControl
            componentClass="textarea"
            placeholder=""
            readOnly
            className="search-results"
            value={this.state.searchResults}
          />
        </FormGroup>
      </form>
    )
  }
}