import React from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import SimpleCard from './SimpleCard.js'

class CardCollection extends React.Component{
  constructor (props){
    super(props);
    this.state = {
      tips: props.tips,
      size: props.tips.length
    };
  }
  componentWillReceiveProps(newProps){
    this.setState({tips: newProps.tips});
    this.setState({size: newProps.tips.length});
  }

  render(){
    var collection = []
    let i = 0
    for (i=0;i<this.state.size;i++) {
      console.log(this.state.tips[i]);
      collection.push(<div><SimpleCard tipTitle={this.state.tips[i].title} tipDescription={this.state.tips[i].description}/></div>);
    }

    return (
    <div>
      {collection}
    </div>
    )
  }
}

export default CardCollection;
