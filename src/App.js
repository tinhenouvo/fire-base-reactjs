import React from 'react';
import { Grid } from '@material-ui/core';
import './App.css';
import Form from './component/form';
import Tabela from './component/table';

function App() {
  return (
      <div className="App">
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item container >
            <Form/>
          </Grid>
          <Grid item container>
            <Tabela/>
          </Grid>
        </Grid>
      </div>
  );
}

export default App;
