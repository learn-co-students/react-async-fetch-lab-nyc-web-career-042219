import React from 'react'

export default class App extends React.Component {
	state ={
		data: []
	}
	componentDidMount(){
		fetch('http://api.open-notify.org/astros.json')
		.then(res=>res.json())
		.then(data => {
			this.setState({
				data: data
			})
		})
	}

	render(){
		return(
			<div></div>
		)
	}
}