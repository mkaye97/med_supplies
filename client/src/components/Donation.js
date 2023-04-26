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

const useStyles = makeStyles((theme) => ({
    root: {
      background: 'linear-gradient(to right, #0575E6, #00F260)',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      }
  }));


  export default function Donation() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [charityId, setCharityId] = useState('');
    const [donationAmount, setDonationAmount] = useState('');
  
    const [addDonation, { error }] = useMutation(ADD_DONATION);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleCharityChange = (event) => {
      setCharityId(event.target.value);
    };
  
    const handleDonationAmountChange = (event) => {
      setDonationAmount(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        await addDonation({
          variables: { charityId, amount: parseFloat(donationAmount) },
        });
  
        handleClose();
        setCharityId('');
        setDonationAmount('');
      } catch (e) {
        console.error(e);
      }
    };
    return (
        <>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Donate
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <Typography variant="h5">Select Charity</Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <InputLabel id="charity-select-label">Charity</InputLabel>
                        <Select
                          labelId="charity-select-label"
                          id="charity-select"
                          value={charityId}
                          onChange={handleCharityChange}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          {charities.map((charity) => (
                            <MenuItem value={charity._id} key={charity._id}>
                              {charity.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Donation Amount"
                        type="number"
                        value={donationAmount}
                        onChange={handleDonationAmountChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" type="submit">
                        Donate
                        </Button>
                    </Grid>
                </Grid>
            </form>
            </div>
        </Fade>
    </Modal>

{error && <div>Error: {error.message}</div>}
</>
);
};