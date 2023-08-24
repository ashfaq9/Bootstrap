import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <>
        <Stack spacing={5} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>    
        <Button variant="outlined" disabled>Disabled</Button>
        <Button variant="contained" color="success">Success</Button>
    </Stack>
    <br/>
    <Stack spacing={5} direction="row">
        <Button variant="contained" color="error">Success</Button>
        <Button variant="outlined" color="success">Success</Button>
        <Button variant="outlined" color="error">Success</Button>
        <Button variant="text" color="success">Success</Button>
        <Button variant="text" color="error">Success</Button>
    </Stack>
    </>
  );
}