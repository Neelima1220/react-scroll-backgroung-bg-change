import * as React from 'react';
import Navbar from './navbar';
import ContentBar from './contentBar';
import './style.css';

export default function App() {
  const [height, setHeight] = React.useState();
  const [bg, setbg] = React.useState('transparent');
  const [pad, setPad] = React.useState('2rem');

  const changeBg = () => {
    console.log(window.scrollY);
    if (window.scrollY > 110) {
      setbg('yellow');
      setPad('1rem');
    }
    if (window.scrollY > 500) {
      setbg('red');
      setPad('0');
    }
  };
  React.useEffect(() => {
    window.addEventListener('scroll', changeBg);
  }, []);

  return (
    <div style={{ boxSizing: 'border-box' }}>
      <Navbar bg={bg} pad={pad} />
      <ContentBar />
    </div>
  );
}
