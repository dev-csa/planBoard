import React from 'react';

class Customer extends React.Component{
  render(){
    return (
      <div>
        <p>{this.props.userId}</p>
        <p>{this.props.title}</p>
       </div>
    )
  }
}

export default Customer;