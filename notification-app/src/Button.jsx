import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonComponent(props) {
  const { name, onClickHandle } = props;
  return (
    <Button variant="contained" onClick={onClickHandle}>{name}</Button>
  );
}