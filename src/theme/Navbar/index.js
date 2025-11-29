import React from 'react';
import Navbar from '@theme-original/Navbar';

export default function NavbarWrapper(props) {
  return (
    <Navbar
      {...props}
      style={{
        backgroundColor: '#1B4C9A', // example blue style
      }}
    />
  );
}
<nav>
  <a href="/">Home</a>
  <a href="/docs/about">About</a>
  <a href="/docs/contact">Contact</a>
</nav>
