import React from 'react';

const Filter = ({ children, title }) => (
    <div>
        <h1>{title}</h1>
        <ul>{children}</ul>
    </div>
);

const Item = ({ children, onClick }) => (
    <li>
        <button type="button" onClick={onClick}>
            {children}
        </button>
    </li>
);

Filter.Item = Item;

export default Filter;
