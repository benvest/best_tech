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
    this.setState({value: event.target.value});
    if (event.target.value.length > 0){
      this.setState({ids:
        this.state.tips.filter((element) => element.title.indexOf(event.target.value) !== -1 )
      });
    } else {
      this.setState({ids: []});
    }

  }

  componentDidMount() {
    fetch('/tips/get_all_tips')
    .then((response) => response.json())
    .then((tips) => this.setState({tips: tips}))
  }


  render () {
    console.log(this.state.ids)
    return (
      <div>

      <form onSubmit={this.handleSubmit} style={navStyles} >
        <TextField
          placeholder="Search"
          fullWidth={true}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <br/>
      </form>

      <CardCollection tips={this.state.ids} />
    </div>
    )
  }
}

export default TipSearch;
