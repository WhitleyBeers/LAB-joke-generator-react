import React from 'react';
import PropTypes from 'prop-types';

export default function Joke({ joke, btnText }) {
  return (
    <>
      <h3>{joke.setup}</h3>
      <h5>{btnText !== 'Get Punchline' ? joke.punchline : ''}</h5>
    </>
  );
}

Joke.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string,
    punchline: PropTypes.string,
  }).isRequired,
  btnText: PropTypes.string.isRequired,
};
