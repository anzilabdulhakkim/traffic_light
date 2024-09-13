import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [currentLight, setCurrentLight] = useState('red');

  useEffect(() => {
    let timer;

    const changeColour = () => {
      if (currentLight === 'red') {
        setCurrentLight('green');
        timer = setTimeout(() => {
          setCurrentLight('yellow');
        }, 3000);
      } else if (currentLight === 'green') {
        setCurrentLight('yellow');
        timer = setTimeout(() => {
          setCurrentLight('red');
        }, 500);
      } else if (currentLight === 'yellow') {
        setCurrentLight('red');
        timer = setTimeout(() => {
          setCurrentLight('green');
        }, 4000);
      }
    };

    timer = setTimeout(changeColour, currentLight === 'red' ? 4000 : currentLight === 'green' ? 3000 : 500);

    return () => clearTimeout(timer);
  }, [currentLight]);

  return (
    <div id='signal'>
      <div id='box'>
        <div id='red' style={{ backgroundColor: currentLight === 'red' ? 'red' : 'white' }}></div>
        <div id='yellow' style={{ backgroundColor: currentLight === 'yellow' ? 'yellow' : 'white' }}></div>
        <div id='green' style={{ backgroundColor: currentLight === 'green' ? 'green' : 'white' }}></div>
      </div>
    </div>
  );
}

export default App;
