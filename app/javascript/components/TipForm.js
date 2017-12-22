import React from 'react';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import SimpleSelect from './SimpleSelect';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import DropdownOptions from './DropdownOptions.js';

const styles = {
  margin:'50px'
}

const formStyles = {
  width:'100%'
}

class TipForm extends React.Component {
  constructor (props){
    super(props);
    this.state = {value: '', title: '',selectedValue: '', categories: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("changed")
    this.setState({value: event.target.value, title: event.target.title, selectedValue: event.target.category});
  }

  componentDidMount() {
    fetch('/tips/get_all_categories')
    .then((response) => response.json())
    .then((categories) => this.setState({categories: categories}))
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
    console.log(this.state.title)
    return (
      <div>

      <form onSubmit={this.handleSubmit} style={styles} >
        <TextField
          label="Title"
          placeholder="Enter Title"
          fullWidth={true}
          value={this.state.title}
          onChange={this.handleChange}
        />
        <br/><br/>
        <TextField
          label="Tip"
          placeholder="Enter Tip"
          fullWidth={true}
          rows={10}
          multiline={true}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <br/><br/>
      <InputLabel htmlFor="category">Category</InputLabel>
      <Select style={formStyles}
        label="Category"
        value={this.state.selectedValue}
        onChange={this.handleChange}
        input={<Input name="category" id="category" />}
      >
        <DropdownOptions list={this.state.categories} label="Category" selected={this.state.selectedValue}/>

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
