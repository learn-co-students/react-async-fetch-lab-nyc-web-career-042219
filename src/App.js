// create your App component here
import React from 'react'

class App extends React.Component {
    
    render () {
        return (
            <div></div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')

    }

}

export default App