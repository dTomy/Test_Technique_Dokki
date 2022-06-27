import '../styles/App.css'
import  '../datas/users.json'
import Users from './Users'

function App() {
	return (
		<div>
			<Users />
		</div>
	)
}

export default App



//import { Component } from 'react';

/*class App extends React.Component{
  state  = {
    post: {}
  }

  componentDidMount(){
    fetch('https://dummyjson.com/users')
      .then((response) => {
        return response.json()
      })
      .then((result) =>{
        setTimeout(() =>{
          this.setState({post: result})
        }, 1500);

      })
  }

  return (){
    <div className="App">
      <h1>test</h1>
      {(this.state.post.firstname) ? this.state.post.firstName : <p>Chargement...</p>}
    </div>
  }
}*/
