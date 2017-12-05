import React from 'react';




export default class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <div>Greeting: {this.props.greeting} </div>
      </div>
    );
  }
}
