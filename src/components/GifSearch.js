import React from 'react'

class GifSearch extends React.Component {
  constructor(){
    super()

    this.state = {
      searchTerm: ''
    }
  }

  updateSearchTerm = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  handleSearch = (event) => {
    event.preventDefault()
    this.props.onSearch(this.state.searchTerm)
  }

  render() {
    return (
    <form onSubmit={this.handleSearch}>
      <input type='text' value={this.state.searchTerm} onChange={this.updateSearchTerm} />
      <input type='submit' value='Search' />
    </form>
    )
  }
}

export default GifSearch
