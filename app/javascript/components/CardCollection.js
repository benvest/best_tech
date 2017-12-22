import React from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import SimpleCard from './SimpleCard.js'

class CardCollection extends React.Component{
  constructor (props){
    super(props);
    const { tips } = props;
    this.state = { tips, size: tips.length };
  }

  componentWillReceiveProps(newProps){
    const { tips } = newProps;
    this.setState({ tips, size: tips.length });
  }

  render(){
    const { tips } = this.state;

    return (
      <div>
        {tips.map(tip => {
          // might not need the div even
          return (
            <SimpleCard
              key={tip.id}
              tipTitle={tip.title} 
              tipDescription={tip.description}
            />
          )
        })}
      </div>
    )
  }
}

export default CardCollection;
