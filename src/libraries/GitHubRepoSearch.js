const axios = require('axios')

module.exports = class GitHubRepoSearch {
  
  constructor () {
    this.hostname = 'https://api.github.com'
  }

  /* 
  Path
    /search/repositories
  Parameters
    Name	Type	Description
    q     string  Required. The search keywords, as well as any qualifiers.
    sort  string  The sort field. One of stars, forks, or updated. Default: results are sorted by best match.
    order string  The sort order if sort parameter is provided. One of asc or desc. Default: desc
  */
  search (query, sort='', order='desc') {
    return axios
      .get(`${this.hostname}/search/repositories?q=${query}&sort=${sort}&order=${order}`)
      .then(res => {
        if (res && res.status === 200 && res.data && res.data.items) {
          // Got the list of matching repos
          return res.data.items.map(repo => {
            // Extract the name and url
            return `${repo.name} (${repo.url})`
          })
        } else {
          // Return null when res.data.items isn't defined
          return null
        }
      })
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(`${error.response.status} - ${error.response.data}`)
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message)
        }
        console.log(error.config)
      })
  }

} // end GitHubRepoSearch
