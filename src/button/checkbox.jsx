import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Checkboxes() {
  return (
    <div>
      <Checkbox {...label} defaultChecked /> BCA
      <Checkbox {...label} />BCOM
      <Checkbox {...label} disabled />BSC
      <Checkbox {...label} disabled checked />BA
    </div>
  );
}