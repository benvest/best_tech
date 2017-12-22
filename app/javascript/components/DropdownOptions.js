import React from 'react';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';

class DropdownOptions extends React.Component{
  constructor (props){
    super(props);
    // not sure where this is being used, so havent tested it, but it should work like this, 
    // if not set the result of flattenProps to a variable then spread it in.
    this.state = { ...this.flattenProps(props) };
  }

  componentWillReceiveProps(newProps){
    if (this.props !== newProps) {
      this.setState({ ...this.flattenProps(newProps) });
    }
  }

  flattenProps = (props) => {
    const { list, selected } = newProps;
    const size = list.length;
    const label = list.label;
    return { list, selected, size, label };
  }

  render(){
    const { label, list } = this.state;
    return (
      <div>
        <MenuItem value="" >
          Choose {label}
        </MenuItem>
        {list.map(item => {
          return (
            <div key={item.id}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem 
                key={`@mi${item.id}`} 
                value={item.id}
              >
                {item.name}
              </MenuItem>
            </div>
          );
        })}
      </div>
    )
  }
}

export default DropdownOptions;
