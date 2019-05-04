import React from 'react';

import './style.scss';

const Count = ({ value, setValue }) => {
    const changeValue = inputValue =>
        setValue((inputValue > 0 && +inputValue) || +value);
    const increment = () => setValue(value + 1);
    const decrement = () => setValue((value > 0 && value - 1) || 1);

    return (
        <div className="count">
            <button className="count__button" type="button" onClick={decrement}>
                -
            </button>
            <input
                className="count__value"
                type="text"
                value={value}
                onChange={event => changeValue(event.target.value)}
            />
            <button className="count__button" type="button" onClick={increment}>
                +
            </button>
        </div>
    );
};

export default Count;
