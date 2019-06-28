// create your App component here
import React, { Component } from 'react'

export default class App extends Component{

  state = {
    astros: []
  }

  componentDidMount(){
    fetch("http://api.open-notify.org/astros.json")
    .then(res => res.json())
    .then(data => {
      this.setState({
        astros: data.people
      })
    })
  }

  render(){
    return(
      <div>
        {this.state.astros.map(astro => astro.name)}
      </div>
    )
  }

}
