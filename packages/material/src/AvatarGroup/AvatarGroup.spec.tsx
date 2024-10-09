import * as React from 'react';
import { expectType } from '@momo/types';
import AvatarGroup from '@momo/material/AvatarGroup';

<AvatarGroup component="ul" />;
<AvatarGroup variant="circular" />;
<AvatarGroup variant="rounded" />;
<AvatarGroup variant="square" />;

// @ts-expect-error
<AvatarGroup variant="unknown" />;

<AvatarGroup
  renderSurplus={(surplus) => {
    expectType<number, number>(surplus);
    return <div>{surplus}</div>;
  }}
/>;
