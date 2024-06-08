import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { useState, useEffect } from 'react';

export default function SimpleBadge(props) {
  const { dataListForCheck } = props;
  const [numberInfo, setNumberInfo] = useState(0);
  useEffect(() => {
    if(dataListForCheck){
      setNumberInfo(pre => pre + 1);
    }
  }, [dataListForCheck])
  return (
    <Badge badgeContent={numberInfo} color="primary">
      <MailIcon color="action" />
    </Badge>
  );
}