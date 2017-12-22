import React from 'react';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';

class DropdownOptions extends React.Component{
  constructor (props){
    super(props);
    this.state = {
      list: props.list,
      size: props.list.length,
      label: props.list.label,
      selected: props.list.selected
    };
  }
  componentWillReceiveProps(newProps){
    this.setState({list: newProps.list});
    this.setState({size: newProps.list.length});
    this.setState({label: newProps.list.label});
    this.setState({selected: newProps.selected});
  }

  render(){
    var collection = []
    collection.push(<div><MenuItem value="" >Choose {this.state.label}</MenuItem></div>);
    let i = 0
    for (i=0;i<this.state.size;i++) {
      console.log(this.state.list[i]);

      <MenuItem value={10}>Ten</MenuItem>
      collection.push(<div><MenuItem key={this.state.list[i].id} value={this.state.list[i].id} >{this.state.list[i].name}</MenuItem></div>);
    }

    return (
    <div>
      {collection}
    </div>
    )
  }
}

export default DropdownOptions;
