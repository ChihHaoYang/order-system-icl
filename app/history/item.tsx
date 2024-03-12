import React from 'react';
import { HistoryItem } from '../types';
import { removeFromHistory } from '../store';

const Item = ({ id, items, total }: HistoryItem) => {
  return (
    <div
      className='flex flex-col border p-2'
      data-testid={`history-item-${id}`}
    >
      <div className='self-end mb-3'>
        <button
          onClick={e => {
            if (!window.confirm('Delete this history?')) {
              return;
            }
            removeFromHistory(id);
          }}
        >
          x
        </button>
      </div>
      <div className='flex flex-row justify-between'>
        {items.map(e => `${e.name}($${e.price}) x ${e.quantity}`).join(' + ')}
        <div>${total}</div>
      </div>
    </div>
  );
};

export default Item;
