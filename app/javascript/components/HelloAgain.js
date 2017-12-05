import React from 'react'
import PropTypes from 'prop-types'

export default class HelloAgain extends React.Component {
  render() {
    return (
      <div>
        <div>Hello: {this.props.greeting} </div>
      </div>
    );
  }
}

HelloAgain.propTypes = {
  greeting: PropTypes.string
}

HelloAgain.defaultProps = {
  greeting: 'world'
}
