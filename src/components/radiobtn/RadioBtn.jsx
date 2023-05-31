import React from 'react';

export default function RadioBtn({ text, value, radioGroupName, onChangeHandler, checked }) {

  return (
    <label className={`radio-btn ${checked ? 'active' : ''}`}>
      {text}

      <input
        type="radio"
        name={radioGroupName}
        onChange={onChangeHandler}
        value={value}
        checked={checked}
      />
    </label>
  );
}
