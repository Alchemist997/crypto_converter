import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import RadioBtn from './../radiobtn/RadioBtn';
import Input from './../input/Input';
import { selectCategories, selectFilter } from './../../store/reducers/directionsReducer';
import {
  selectReceivedCurrency,
  setReceivedCategory,
  setReceivedCurrency,
  setOutgoingCategory,
  setOutgoingCurrency
} from './directionsFormSlice';


export default function DirectionsForm({ title, listKey, listType, currentCurrency }) {
  const isModeReceived = listType === 'received';
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const filter = useSelector(selectFilter);
  const receivedCurrency = useSelector(selectReceivedCurrency);
  const radioBtns = Object.entries(categories).map(([key, data]) => ({ key, text: data.name }));

  const onChangeCategory = evt => {
    const value = evt.target.value;
    dispatch(isModeReceived ? setReceivedCategory(value) : setOutgoingCategory(value));

    if (value === 'all') return;

    dispatch(isModeReceived
      ? setReceivedCurrency(Object.keys(categories[value].values)[0]) // Первая из категории
      : setOutgoingCurrency(null));
  };


  const getDirectionsList = (values) => {
    if (listKey === 'all') {
      return values.map(el => ({ value: el.code, label: el.name }));
    }

    return values
      .filter(el => categories[listKey].values.hasOwnProperty(el.code))
      .map(el => ({ value: el.code, label: el.name }));
  };


  const directionsList = isModeReceived
    ? getDirectionsList(categories.all.values)
    : getDirectionsList(filter[receivedCurrency].to);


  return (
    <div className='directions-form'>
      <p className='directions-form__title'>{title}</p>

      <div className="radiobtns-wrap">
        {radioBtns.map(el => <RadioBtn
          key={el.key}
          text={el.text}
          value={el.key}
          name='from-btns'
          checked={el.key === listKey}
          onChangeHandler={onChangeCategory} />
        )}
      </div>

      <div className='inputs-wrap'>
        <Input />

        <Select
          className='select'
          options={directionsList}
          placeholder='Выберите...'
          onChange={evt => {
            dispatch(isModeReceived ? setReceivedCurrency(evt.value) : setOutgoingCurrency(evt.value));
          }}

          value={currentCurrency
            ? {
              value: currentCurrency,
              label: isModeReceived
                ? filter[receivedCurrency].from.name
                : filter[receivedCurrency].to.find(el => el.code === currentCurrency)?.name
            } : null}

          theme={(theme) => ({
            ...theme,
            borderRadius: '0 5px 5px 0',
            colors: {
              ...theme.colors,
              primary25: '#ffe1e1',
              primary: '#f28080',
            },
          })}
        />
      </div>

    </div>
  );
}
