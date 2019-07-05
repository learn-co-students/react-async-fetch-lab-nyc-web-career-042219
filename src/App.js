// create your App component here
import React from 'react';

export default class App extends React.Component {

  state = {
    spacePeople: []
  }
  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
    .then(res => res.json())
    .then(data => {
      spacePeople: data
    })
  }

  render() {
    console.log(this.state.spacePeople)
    return(
      <div>

      </div>
    )
  }

}
