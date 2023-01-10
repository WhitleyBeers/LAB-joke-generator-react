import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import getJoke from '../api/jokeData';
import Joke from '../components/Joke';

function Home() {
  const [joke, setJoke] = useState({});
  const [btnText, setBtnText] = useState('Get A Joke');

  const setButton = (text) => {
    setBtnText(text);
  };

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery,
      });
    });
    setButton('Get Punchline');
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Joke Generator</h1><hr />
      <Joke joke={joke} btnText={btnText} />
      {btnText === 'Get A Joke' || btnText === 'Get Another Joke' ? (
        <Button type="button" className="btn btn-primary" onClick={getAJoke}>{btnText}</Button>)
        : (<Button type="button" className="btn btn-primary" onClick={() => setButton('Get Another Joke')}>{btnText}</Button>)}
    </div>
  );
}

export default Home;
