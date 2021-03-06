import React from 'react';
import './App.css';
import {Table, User} from './Components/Table';

type MyState = {
  users:User[];
}

class App extends React.Component<{},MyState> {

  state: MyState = {
    users: [
      {
        name:"Cloud",
        job:"Merc",
      },
      {
        name:"Barret",
        job:"Bar Owner",
      },
      {
        name:"Tifa",
        job:"Bartender",
      },
      {
        name:"Aerith",
        job:"Flower Girl",
      }
    ]
  }

  removeUser = (index:any) => {
    const {users} = this.state
      this.setState({
        users: users.filter((_, i) => {
          return i !== index
        }),
      })
  }

  render(){
    return(
      <div className="container">
        <Table users={this.state.users} removeUser={this.removeUser}/>
      </div>
    );
  }
  
}

export default App;
