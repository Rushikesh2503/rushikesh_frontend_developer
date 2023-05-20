import React from 'react';
import Grid from './GridComponents/Grid';

const GridContainer = () => {
    const data = [
        { title: 'Card 1', description: 'Description for Card 1' },
        { title: 'Card 2', description: 'Description for Card 2' },
        { title: 'Card 3', description: 'Description for Card 3' },
        { title: 'Card 1', description: 'Description for Card 1' },
        { title: 'Card 2', description: 'Description for Card 2' },
        { title: 'Card 3', description: 'Description for Card 3' },
        { title: 'Card 1', description: 'Description for Card 1' },
        { title: 'Card 2', description: 'Description for Card 2' },
        { title: 'Card 3', description: 'Description for Card 3' },
        { title: 'Card 1', description: 'Description for Card 1' },
        // Add more data items as needed
      ];
  return (
    <div className="container mx-auto p-4">
      <Grid data={data} />
    </div>
  )
}

export default GridContainer