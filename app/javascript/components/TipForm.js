import React from 'react';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import SimpleSelect from './SimpleSelect';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';

const styles = {
  margin:'50px'
}

const formStyles = {
  width:'100%'
}

class TipForm extends React.Component {
  constructor (props){
    super(props);
    this.state = {value: '', title: '',age: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // console.log("changed")
    this.setState({value: event.target.value});
    this.setState({title: event.target.title});
    // console.log(this.state.value)
  }



  handleSubmit(event) {
    const val = this.state.value
    event.preventDefault();

    fetch('/pages/create',
    {method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({description: val})})
    .then((response) => response.json())
    .then((value) => this.setState({value: name}))
  }

  render () {
    return (
      <div>

      <form onSubmit={this.handleSubmit} style={styles} >
        <TextField
          placeholder="Enter Title"
          fullWidth={true}
          value={this.state.title}
          onChange={this.handleChange}
        /><br/><br/>
      <TextField
        placeholder="Enter Tip"
        fullWidth={true}
        rows={10}
        multiline={true}
        value={this.state.value}
        onChange={this.handleChange}
      />
      <br/>
      <br/>
      <Select style={formStyles}
        value={this.state.age}
        onChange={this.handleChange}
        input={<Input name="age" id="age-simple" />}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <br/>
      <br/>

      <Button type="submit" raised >Submit </Button>

      </form>
    </div>
    )
  }
}

export default TipForm;
