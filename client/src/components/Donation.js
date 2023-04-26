import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { makeStyles } from '@mui/material';
import Button from '@mui/material';
import TextField from '@mui/material';
import Modal from '@mui/material';
import Backdrop from '@mui/material';
import Fade from '@mui/material';
import Typography from '@mui/material';
import Grid from '@mui/material';
import MenuItem from '@mui/material';
import FormControl from '@mui/material';
import Select from '@mui/material';
import InputLabel from '@mui/material';

import { ADD_DONATION } from '../utils/mutations';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(to right, #0575E6, #00F260)',
    },
  });