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

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  componentDidMount() {
    fetch('/tips/get_all_categories')
      .then(response => response.json())
      .then(categories => this.setState({ categories }))
  }

  handleSubmit(event) {
    const { value } = this.state;
    event.preventDefault();

    fetch('/pages/create', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description: value })
    }).then(response => {
      console.log(response)
      return response.json()
    }).then(json => {
      console.log(json)
      this.setState({ value: json.name })
    });
  }

  render () {
    const { title, value, selectedValue, categories } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit} style={styles} >
          <TextField
            label="Title"
            placeholder="Enter Title"
            fullWidth={true}
            value={title}
            onChange={this.handleChange('title')}
          />
          <br/><br/>
          <TextField
            label="Tip"
            placeholder="Enter Tip"
            fullWidth={true}
            rows={10}
            multiline={true}
            value={value}
            onChange={this.handleChange('value')}
          />
          <br/><br/>
        <InputLabel htmlFor="category">Category</InputLabel>
        <Select 
          style={formStyles}
          label="Category"
          value={selectedValue}
          onChange={this.handleChange('selectedValue')}
          input={<Input name="category" id="category" />}
        >
          {categories.map(item => {
            return (
              <MenuItem 
                key={`@mi${item.id}`} 
                value={item.id}
              >
                  {item.name}
               </MenuItem>
            );
          })}
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
