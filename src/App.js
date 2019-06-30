// create your App component here

import React, { Component } from 'react'

class App extends Component {

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(resp => console.log(resp))
  }

  render(){
    return <div>Hello, space!</div>
  }

}

export default App
