import * as React from 'react';
import './style.css';

export default function Navbar({ bg, pad }) {
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: `${bg}`,
        textAlign: 'center',
        margin: '-1.5rem',
        marginBottom: '0',
        paddingTop: `${pad}`,
        height: '110px',
      }}
    >
      <h1>Navbar</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
