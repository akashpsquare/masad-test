import React, { useState } from 'react';

// Define the types for Item and MutationStatus
type MutationStatus = 'original' | 'new' | 'updated' | 'deleted';

interface Item {
  id: number;
  name: string;
  status: MutationStatus;
}

// Initial data
const initialData: Item[] = [
  { id: 1, name: 'Item 1', status: 'original' },
  { id: 2, name: 'Item 2', status: 'original' },
];

// Status colors mapping
const statusColors: Record<MutationStatus, string> = {
  original: 'black',
  new: 'green',
  updated: 'blue',
  deleted: 'red',
};

 const DataMutationTracker: React.FC = () => {
  const [data, setData] = useState<Item[]>(initialData);

  // Update an item's name and status
  const updateItem = (id: number, newName: string) => {
    setData(prev =>
      prev.map(item =>
        item.id === id
          ? {
              ...item,
              name: newName,
              status: item.status === 'new' ? 'new' : 'updated',
            }
          : item
      )
    );
  };

  // Mark an item as deleted
  const deleteItem = (id: number) => {
    setData(prev =>
      prev.map(item =>
        item.id === id ? { ...item, status: 'deleted' } : item
      )
    );
  };

  // Add a new item
  const addItem = () => {
    const newItem: Item = {
      id: Date.now(),
      name: 'New Item',
      status: 'new',
    };
    setData(prev => [...prev, newItem]);
  };

  return (
    <div>
      <button onClick={addItem}>Add New Item</button>
      {data.map(item => (
        <div
          key={item.id}
          style={{
            color: statusColors[item.status],
            textDecoration: item.status === 'deleted' ? 'line-through' : 'none',
          }}
        >
          <input
            value={item.name}
            disabled={item.status === 'deleted'}
            onChange={e => updateItem(item.id, e.target.value)}
          />
          <button onClick={() => deleteItem(item.id)}>Delete</button>
          <span> ({item.status})</span>
        </div>
      ))}
    </div>
  );
};

export default DataMutationTracker;