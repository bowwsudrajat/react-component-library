import * as React from 'react';
import Badge from '@momo/material/Badge';

function classesTest() {
  return (
    <Badge badgeContent={4} classes={{ badge: 'testBadgeClassName', colorInfo: 'colorInfoClass' }}>
      <div>Hello World</div>
    </Badge>
  );
}
