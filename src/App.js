import React, { Component } from 'react';
import './App.css';

///////////////////////
// Visual components //
///////////////////////

function Header() {
	return (
		<header>
			<h1 >Tasks List - ReactJS</h1>
		</header>
	)
}

function Footer() {
	return (
		<footer>
			<p className="text-muted footer-text">Made with ReactJS and Boostrap 4 by <a href="https://jofranmtz.com/">jofranmtz</a></p>
		</footer>
	)
}

///////////////////////
// Render components //
///////////////////////

function ItemList(props){
	return (
		<ul className="task-list list-group">
			{props.items.map(item => (
				<li className="list-group-item" key={item.id}>{item.id}. {item.text}</li>
			))}
		</ul>
	)
}

//////////////
// Main App //
//////////////

class App extends Component {
	constructor(props) 	{
		super(props);
		
		this.state = { items: [], task: ''}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render() {
		return (
			<div className="app">
				
				<Header />
			
				<ItemList items={this.state.items} />					
			
				<form onSubmit={this.handleSubmit}>
					<div class="input-group mb-3">
						<input 
							type="text" 
							className="form-control" 
							onChange={this.handleChange} 
							value={this.state.task}
						/>
						<div class="input-group-append">
							<button
								class="btn btn-sm btn-dark"
								type="submit">
									Add task #{this.state.items.length + 1}
							</button>
						</div>
					</div>
				</form>

				<Footer />

			</div>
		);
	}

	// Functions
	handleChange(e) {
		this.setState({ task: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		if (!this.state.task.length) {
			return;
		}
		const newItem = {
			text: this.state.task,
			id: this.state.items.length + 1
		};
		this.setState(state => ({
			items: state.items.concat(newItem),
			task: ''
		}));
	}

}

export default App;
