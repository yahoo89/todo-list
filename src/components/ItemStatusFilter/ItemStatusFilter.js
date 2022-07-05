import React from 'react';

const filterButtons = [
  { name: 'all', label: 'All' },
  { name: 'active', label: 'Active' },
  { name: 'done', label: 'Done' }
];

const ItemStatusFilter = ({ filter, onFilterChange = () => { } }) => {

  const buttons = filterButtons.map(({ name, label }) => {
    const isActive = name === filter;
    const classNames = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');

    return (
      <button key={name}
        type="button"
        onClick={() => onFilterChange(name)}
        className={classNames}>{label}</button>
    );
  });

  return (
    <div className="btn-group">
      <button
        type='button'
        className='btn btn-info'
      >
        All
      </button>
      <button
        type='button'
        className='btn btn-outline-secondary'
      >
        Active
      </button>
      <button
        type='button'
        className='btn btn-outline-secondary'
      >
        Done
      </button>
    </div>
  );
};

export default ItemStatusFilter;