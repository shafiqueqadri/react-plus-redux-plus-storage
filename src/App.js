import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from "react-redux";
import { addUserAction, removeUserAction } from './actions/users';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      phone: null
    }
  }

  onAddUserClick = () => {
    this.props.onAddUserClick(this.state);
    this.setState({
      name: '',
      phone: null
    })
  }

  onRemoveUser = (id) => {
    this.props.onRemoveUser(id);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Users list</h1>
        </header>
        <table className="DataTable">
          <thead>
            <tr>
              <th>User id</th>
              <th>Name</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.users.map((user, index) => {
                return <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td><button onClick={ () => this.onRemoveUser(user.id)}>X</button></td>
                </tr>;
              })
            }
          </tbody>
        </table>

        <p><input value={this.state.name || ''} onChange={(event) => this.setState({name: event.target.value})} placeholder="User name" /></p>
        <p><input value={this.state.phone || ''} onChange={(event) => this.setState({ phone: event.target.value })} placeholder="Phone Number" /></p>
        <p><button onClick={this.onAddUserClick} >Add User </button></p>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  products: state.products,
  users: state.users
});

const mapActionsToProps = {
  onAddUserClick: addUserAction,
  onRemoveUser: removeUserAction
};
export default connect(mapStateToProps, mapActionsToProps)(App);
