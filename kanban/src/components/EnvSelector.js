import React from 'react';

const EnvSelector = ({
  envs,
  onSelect
}) => {
  return (
    <ul>{
      envs.map(({ selected, name }) => (
        <li key={name}>{
          selected ?
          name :
          <a href="#" onClick={e => {
            e.preventDefault();

            onSelect(name);
          }}>{name}</a>
        }</li>
      ))
    }</ul>
  );
};

export default EnvSelector;
