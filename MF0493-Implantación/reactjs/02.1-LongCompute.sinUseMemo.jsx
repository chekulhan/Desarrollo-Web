
import React, { useState } from 'react';

const users = [
  { id: 1, name: 'Alice Johnson' },
  { id: 2, name: 'Bob Smith' },
  { id: 3, name: 'Charlie Brown' },
  { id: 4, name: 'David Wilson' },
  { id: 5, name: 'Eva Green' },
  // Imaginar muchos, pero muchos usuarios
];

export const LongComput = () => {
  const [search, setSearch] = useState('');

  // Sin useMemo: filteredUsers es un array, resultado del filtrado directo
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  console.log('Filtering users...');

  return (
    <div>
      <h2>User Search</h2>
      <input
        type="text"
        placeholder="Search users"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
