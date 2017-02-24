import * as React from 'react';
import {Link} from 'react-router';

export interface NavProps { slug: string; }

export const Nav = (props: NavProps) => (
  <div>
    <h1>Welcome @ React TSX Starter KIT ;  {props.slug}</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </div>
);