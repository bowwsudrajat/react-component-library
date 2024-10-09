import * as React from 'react';
import Box from '@momo/material/Box';

<Box sx={{ borderColor: (theme) => theme.palette.primary.main }} />;

// @ts-expect-error unknown color
<Box sx={{ borderColor: (theme) => theme.palette.invalid }} />;
