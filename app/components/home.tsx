import * as React from 'react';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import { Nav } from './nav';

import {increment, decrement} from '../redux/actions';

interface BaseProps {
  counter:  number,
}
interface DispatchProps {
  increment: () => void,
  decrement: () => void,
}
interface HomeState {}

interface HomeProps extends BaseProps, DispatchProps {};

export class Home extends React.Component<HomeProps, HomeState> {
  render () {
    let {counter, increment, decrement} : HomeProps = this.props;
    console.log('HomeProps', counter, increment, decrement);
    return (
      <div>
        <Nav slug="Home"/>
        <div>
          <p>On the homepage.</p>
          <h2>Todos</h2>
          <h3>counter: {counter}</h3>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

const stateToProps = (state: any) => ({counter: state});
const actionsToProps = (dispatch: any) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

export default ReactRedux.connect(stateToProps, actionsToProps)(Home);