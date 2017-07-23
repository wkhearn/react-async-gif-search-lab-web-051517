import React from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      gifs: []
    }
  }

  onSearch = (searchTerm) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC`)
    .then(response => response.json())
    .then(gifs => { this.setState({ gifs: gifs.data.slice(0,3) })})
  }

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch onSearch={this.onSearch}/>
      </div>
    )
  }
}

export default GifListContainer
