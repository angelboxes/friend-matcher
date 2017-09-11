import React from 'react';
import Member from './Member';

class MemberList extends React.Component{
  constructor(props){
    super(props);
    this.Members=props.members;
  }

  render(){
  	return(
  	  <div className="MemberList">
  	    <ul className="members">{this.Members.map(member =>
  	      <Member key={member.id} member={member}/>
  	      )}
  	    </ul>
  	  </div>
  	);
  }
}

export default MemberList;