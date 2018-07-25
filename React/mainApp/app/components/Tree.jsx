import React from 'react';

const Tree = props => (
  <div>
    <ul>
      {props.films && props.films.map(film => <div>{film.title}</div>)}
    </ul>
  </div>
);

export default Tree;
