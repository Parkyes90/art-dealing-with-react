import React from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';

import './CounterList.css';

const CounterList = ({counters, onIncrement, onDecrement, setColor}) => {
  const counterList = counters.map(
    (counter, i) => (
      <Counter
        key={i}
        index={i}
        {...counter}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        setColor={setColor}
      />
    )
  );

  return (
    <div className="CounterList">
      {counterList}
    </div>
  );
};

CounterList.propTypes = {
  counters: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      number: PropTypes.number
    })),
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  setColor: PropTypes.func
};

CounterList.defaultProps = {
  counters: []
};

export default CounterList;