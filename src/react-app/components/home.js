import React from 'react';
import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter } from '../actions';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.shouldIncrement = this.shouldIncrement.bind(this);
  }

  shouldIncrement(bool) {
    const action = (bool === true) ? this.props.increaseCounter : this.props.decreaseCounter;

    action();
  }

  render() {
    const word = 5;
    word.toString();

    return (
      <div>
        <h1>{this.props.counter}</h1>
        <button onClick={() => this.shouldIncrement(true)}>+</button>
        <button onClick={() => this.shouldIncrement(false)}>-</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ counter: state.counter });
const mapDispatchToProps = dispatch => ({ increaseCounter: () => dispatch(increaseCounter()),
  decreaseCounter: () => dispatch(decreaseCounter()) });

export default connect(mapStateToProps, mapDispatchToProps)(Home);
