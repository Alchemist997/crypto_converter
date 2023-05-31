import React from 'react';
import DirectionsForm from './components/directionsForm/DirectionsForm';
import { useSelector } from 'react-redux';
import {
  selectReceivedCategory,
  selectReceivedCurrency,
  selectOutgoingCategory,
  selectOutgoingCurrency
} from './components/directionsForm/directionsFormSlice';


function App() {
  const currentReceivedCategory = useSelector(selectReceivedCategory);
  const currentReceivedCurrency = useSelector(selectReceivedCurrency);
  const currentOutgoingCategory = useSelector(selectOutgoingCategory);
  const currentOutgoingCurrency = useSelector(selectOutgoingCurrency);

  return (
    <div className="App">
      <main className="main">
        <DirectionsForm
          title='Отдаёте'
          currentCurrency={currentReceivedCurrency}
          listKey={currentReceivedCategory}
          listType='received'
        />

        <DirectionsForm
          title='Получаете'
          currentCurrency={currentOutgoingCurrency}
          listKey={currentOutgoingCategory}
          listType='outgoing'
        />
      </main>
    </div>
  );
}

export default App;
