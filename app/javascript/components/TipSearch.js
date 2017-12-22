import React from 'react';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import SimpleCard from './SimpleCard.js';
import CardCollection from './CardCollection.js';

const navStyles = {
  margin:'50px'
}
class TipSearch extends React.Component {
  constructor (props){
    super(props);

    this.state = {
      value: '',
      ids: [],
      tips: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;

    if (value && value.length > 0) {
      this.setState((prevState, props) => ({
        value,
        ids: prevState.tips.filter((element) => element.title.toLowerCase().indexOf(value.toLowerCase()) !== -1)
      }));
    } else {
      this.setState({ value, ids: [] });
    }
  }

  componentDidMount() {
    fetch('/tips/get_all_tips')
      .then(response => response.json())
      .then(tips => this.setState({ tips }))
  }

  render () {
    const { ids, value } = this.state;
   
    console.group("Tip Search");
    console.debug(`ids: ${ids}`);
    console.debug(`value: ${value}`);
    console.groupEnd()

    return (
      <div>
        <form onSubmit={this.handleSubmit} style={navStyles} >
          <TextField
            placeholder="Search"
            fullWidth={true}
            value={value}
            onChange={this.handleChange}
          />
          <br/>
        </form>

        <CardCollection tips={ids} />
      </div>
    )
  }
}

export default TipSearch;
