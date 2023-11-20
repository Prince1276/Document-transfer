import React from 'react';

const GridExample = () => {
  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
    height: '100vh',
  };

  const gridItemStyle = {
    padding: '10px',
    border: '1px solid black',
    height: '100%',
  };

  const leftColumnStyle = {
    backgroundColor: 'lightblue',
  };

  const rightColumnStyle = {
    backgroundColor: 'lightgreen',
  };

  return (
    <div style={gridContainerStyle}>
      <div style={{ ...gridItemStyle, ...leftColumnStyle }}>
        
      </div>
      <div style={{ ...gridItemStyle, ...rightColumnStyle }}>
        
      </div>
    </div>
  );
};

export default GridExample;
