import React, { Component } from 'react';
import './App.css';

///////////////////////
// Visual components //
///////////////////////

function Header() {
	return (
		<header>
			<h1 >To-Do List - ReactJS</h1>
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

function ItemList(props) {
	return (
		<ul className="task-list list-group">
			{props.items.map(item => (
				<li className="list-group-item" key={item.id}>{item.id}. {item.text}</li>
			))}
		</ul>
	)
}

function Buttons(props) {
	return (
		<div>
			<button className="btn btn-block btn-secondary text-white disabled" onClick={props.removeLast} >Remove last</button>
			<button className="btn btn-block btn-danger text-white" onClick={props.removeAll} >Remove all</button>
		</div>
	)
}

//////////////
// Main App //
//////////////

class App extends Component {
	constructor(props) 	{
		super(props);
		
		this.state = { items: [], task: 'Do homework'}

		this.removeAll = this.removeAll.bind(this);
		this.removeLast = this.removeLast.bind(this);
		this.changeTask = this.changeTask.bind(this);
		this.addTask = this.addTask.bind(this);
	}

	render() {
		return (
			<div className="app">
				
				<Header />
			
				<ItemList items={this.state.items} />

				<form onSubmit={this.addTask}>
					<div class="input-group mb-3">
						<input 
							type="text" 
							className="form-control" 
							onChange={this.changeTask} 
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

				<Buttons removeLast={this.removeLast} removeAll={this.removeAll} />

				<Footer />

			</div>
		);
	}

	// Functions
	removeAll(e) {
		this.setState({ items: [] });
		alert('All tasks were deleted.');
	}

	removeLast(e) {
		this.setState({ });
	}

	changeTask(e) {
		this.setState({ task: e.target.value });
	}

	addTask(e) {
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
