import * as React from 'react';
import { connect } from 'react-redux'
import { Nav } from './nav';

import {increment, decrement} from '../redux/actions';

interface HomeProps {
  counter: number;
  increment: () => void;
  decrement: () => void;
}

interface HomeState {
  counter: number;
}

function mapStateToProps(state) {
  return {
    counter: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
}

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    console.log('Home.props', this.props);
    return (
      <div>
        <Nav slug="Home"/>
        <div>
          <p>On the homepage.</p>
          <h2>Todos</h2>
          <h3>counter: {this.props.counter}</h3>
          <button onClick={this.props.increment}>Increment</button>
          <button onClick={this.props.decrement}>Decrement</button>
        </div>
      </div>
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);