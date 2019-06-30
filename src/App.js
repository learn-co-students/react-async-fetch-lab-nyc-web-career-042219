import React from 'react';

class App extends React.Component {

    state = {
        peopleInSpace: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(data => {
            this.setState({
                peopleInSpace: data.people
            })
        })
    }

    render() {
        return(
            <h1>
            {this.state.peopleInSpace.map(person => person.name)}
            </h1>
        )
    }
}
export default App;