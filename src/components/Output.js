import React from 'react';

export default function Output(props) {
  const display = props.value.map(something => {
    return <span>{something} </span>
  })
  return (
    <output>{display}</output>
  );
}
