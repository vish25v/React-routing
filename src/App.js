import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import ListKeys from "./components/ListKeys";


//simple presentational component:
const User = (props) => {
  return (
        <div>
          <h1> User Info {props.username} </h1>
        </div>
    );
};



class App extends Component {

    constructor(props) {
      super(props);
      this.state ={loggedin: false};
      this.loginHandle = this.loginHandle.bind(this);
    }
    loginHandle  = () => {
        this.setState((prevstate) => {
          console.log(prevstate);
            return {
                loggedin: !prevstate.loggedin
            }
        });

    };


    render() {
    return (
      <Router>
        <div className="App">

           <br/> &nbsp;<button onClick={this.loginHandle}>Log in</button>
          
          <ul>
              <li> <Link to="/">Home</Link> </li>
              <li> <Link to="/About">About Us</Link> </li>
              <li> <Link to="/User/Alex"> User : Alex </Link> </li>
              <li> <Link to="/User/Bob"> User: Bob </Link> </li>
              <li> <Link to="/ListKeys">List and Keys</Link> </li>
          </ul>


            <switch>
          <Route path="/" exact strict render ={
              () => { return( <h1> Hello world </h1> )}
              }/>
            <Route path="/About" exact strict render ={
                () => { return( <h1> About us </h1> )}
            }/>
            <br/>

            <Route path="/User/:username" exact render={ ({match}) => (
              this.state.loggedin ? ( <User username = {match.params.username} /> ) : ( <Redirect to="/"/> )
                ) }/>

            <Route path="/ListKeys" component={ListKeys}/>
            </switch>




        </div>
      </Router>
    );
  }
}

export default App;
