import React, { useState } from 'react';
import { Button, TextField, Box, Card, CardContent, Typography } from '@mui/material';

const items = [
  { id: 1, name: 'Item 1', description: 'This is a description for item 1', price: '$10' },
  { id: 2, name: 'Item 2', description: 'This is a description for item 2', price: '$20' },
  { id: 3, name: 'Item 3', description: 'This is a description for item 3', price: '$30' },
  { id: 4, name: 'Item 4', description: 'This is a description for item 4', price: '$40' },
];

const MuiExample = () => {
  const [filter, setFilter] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleFilter = () => {
    setFilteredItems(
      items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
    );
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <TextField
        label="Filter by name"
        value={filter}
        onChange={handleFilterChange}
        sx={{ marginBottom: '20px' }}
      />
      <Button onClick={handleFilter} variant="contained" sx={{ marginBottom: '20px' }}>
        Filter Items
      </Button>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {filteredItems.map(item => (
          <Card key={item.id} sx={{ width: 250 }}>
            <CardContent>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                {item.description}
              </Typography>
              <Typography variant="h6" color="primary">
                {item.price}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default MuiExample;
