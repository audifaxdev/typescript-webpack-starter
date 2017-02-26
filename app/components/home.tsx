import * as React from 'react';
import * as ReactRedux from 'react-redux';
import { Image, Carousel, Glyphicon , Button, ButtonToolbar } from 'react-bootstrap';
import { MyNavBar } from './navbar';

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
    return (
      <div>
        <MyNavBar slug="Home"/>
        <div className="container">
          <Carousel>
            <Carousel.Item>
              <Image responsive={true} className="center-block" width={900} height={500} alt="900x500" src="/dist/carousel.png"/>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image responsive={true} className="center-block"  width={900} height={500} alt="900x500" src="/dist/carousel.png"/>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image responsive={true} className="center-block" width={900} height={500} alt="900x500" src="/dist/carousel.png"/>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <p>On the homepage.</p>
          <h2>Todos</h2>
          <h3>counter: {counter}</h3>
          <ButtonToolbar>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
          </ButtonToolbar>
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