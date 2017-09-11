import React, { Component } from 'react';
import uuid from 'uuid';
import MemberList from './MemberList';

const Members =[
  {
    "id":uuid.v4(),
    "name": "Member 1"
  },
  {
    "id":uuid.v4(),
    "name": "Member 2"
  }
];

class App extends Component {
  render() {
    return(
      <div className="App">
        <div className="App-header">
          <h2>Friend Matcher</h2>
        </div>
          <button onClick={this.addMember}>Agregar</button>
          <MemberList members={Members}/>
      </div>
    );
  }

  addMember=()=>{
    Members.push({
      "id":uuid.v4(),
      "name":"NewMember"
    }
    );
    this.setState(
      Members
    );
  }

}



export default App;
