import * as React from 'react';
import { MyNavBar } from './navbar';

export const About = () => (
  <div>
    <MyNavBar slug="About"/>
    <div className="container">
      <p>On the about page</p>
    </div>
  </div>
);