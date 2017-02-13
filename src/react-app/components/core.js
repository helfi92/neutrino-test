import React from 'react';
import { Link } from 'react-router';

const Core = ({ children }) => <div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/users">Users</Link>
    </nav>
    <main>
      { children }
    </main>
  </div>;

export default Core;
