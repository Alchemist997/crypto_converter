import React, { useState } from 'react';

export default function Input() {
  const [inputValue, setInputValue] = useState('');

  return (
    <input
      className='input'
      type='text'
      value={inputValue}
      placeholder='Сумма'
      onChange={evt => setInputValue(evt.target.value)}
    />
  );
}
