import React, { Component } from 'react'
import loading from './loading.gif'

class spinner extends Component {
  render() {
    return (
      <div>
        <img src={loading} alt='Loading'/>
      </div>
    )
  }
}

export default spinner
