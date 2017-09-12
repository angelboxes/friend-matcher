import React from 'react';


class Member extends React.Component{
  constructor(props){
    super(props);
    this.member=props.member;
  }

  render(){
  	return(
  	  <li className="Member">
  	    {this.member.name}
  	  </li>
  	);
  }
}

export default Member;