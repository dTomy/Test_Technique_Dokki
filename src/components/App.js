import React from "react";
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Users'


class App extends React.Component {
	render(){
		return(
			<div className="App">
				<div className="container">
					<Users />
				</div>
			</div>
		);

/*	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
"https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
      <div className = "App">
      <h1> Fetch data from an api in react </h1> {
        items.map((item) => (
        <ol key = { item.id } >
          User_Name: { item.username },
          Full_Name: { item.name },
          User_Email: { item.email }
          </ol>
        ))}
    </div>
	);
  }
*/
	}
}

export default App;
