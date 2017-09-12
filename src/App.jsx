import React, { Component } from 'react';
import uuid from 'uuid';
import MemberList from './MemberList';

const Members =[
];

class App extends Component {
  render() {
    return(
      <div className="App">
        <div className="App-header">
          <h2>Friend Matcher</h2>
        </div>
          <button onClick={this.addMember}>Add</button>
          <button onClick={this.matchTournament}>Match Tournament</button>
          <button onClick={this.reset}>Reset</button>
          <MemberList members={Members}/>
      </div>
    );
  }


  addMember=()=>{
    Members.unshift({
      "id":uuid.v4(),
      "name":"NewMember"+(Members.length+1)
    }
    );
    this.setState(
      Members
    );
  }

  matchTournament=()=>{
    console.log("match");
    let tournamentTree;
    let tournamentList=[];
    for (let m in Members){
      tournamentList.push({
        member:Members[m]
      });
    }
    while (tournamentList.length>1){
      let nextList=[];
      for (let m in tournamentList){
        if (typeof tournamentList[m].pair==="undefined"){
          let freeMembers = tournamentList.filter(
            member=>((typeof member.pair==="undefined")&&(tournamentList[m]!==member))
            );
          if (freeMembers.length>0){
            let randomIndex = getRandomInt(0, freeMembers.length-1);
            tournamentList[m].pair=freeMembers[randomIndex];
            freeMembers[randomIndex].pair=tournamentList[m];
            let winner = {
              member:{},
              lNode:tournamentList[m],
              rNode:tournamentList[m].pair
            };
            tournamentList[m].winner=winner;
            freeMembers[randomIndex].winner=winner;
            nextList.push(winner);
          }else{
            nextList.unshift(tournamentList[m]);
          }
        }
      }
      tournamentList=nextList;
      if (tournamentList.length===1){
        tournamentTree=nextList[0];
      }


    }
    console.log(tournamentTree);
  }
}

const printall=(object)=>{
  if (object!==null){
    if (typeof object !== "undefined"){
      console.log(object.member);      
      printall(object.lNode);
      printall(object.rNode);
    }
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default App;
