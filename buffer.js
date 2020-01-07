            <Grid
                container
            >
                <Grid item>
                            
                </Grid>
                <Grid item>

                </Grid>
            
            </Grid>


import React from 'react';

function App() {
  const isBackgroundRed = true;

  return (
    <div
      style={{
        backgroundColor: isBackgroundRed ? 'red' : 'blue',
      }}
    />
  );
}

export default App;


