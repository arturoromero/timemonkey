import React, { Component, Fragment, useState } from 'react'
import { Button, TextField, Grid } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/styles';




export default class extends Component {


	state = { open: false }

	handleToggle = () => {
		this.setState({
			open: !this.state.open
		})
	}


	render(){
		const { open } = this.state;
		const location = [
	    {
	      value: 'alabama',
	      label: 'Alabama'
	    },
	    {
	      value: 'new-york',
	      label: 'New York'
	    },
	    {
	      value: 'san-francisco',
	      label: 'San Francisco'
	    }
	  ];
		return <Fragment>
		<button className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary" onClick={this.handleToggle}>Add User + </button>
		
		 <Dialog open={open} onClose={this.handleToggle} aria-labelledby="form-dialog-title">
	        <DialogTitle id="form-dialog-title">Add New User</DialogTitle>
	        <DialogContent>
	          <DialogContentText>
	            To create a new user, please enter the necessary data.
	          </DialogContentText>
	          <Grid
              item
              md={12}
              xs={12}
            >
	          <TextField
	            autoFocus
	            margin="normal"
	            id="name"
	            label="Name"
	            type="text"
	            fullWidth
	            
	          />
	          </Grid>
	          <Grid
              item
              md={12}
              xs={12}
            >
	        <TextField	      
	            margin="normal"
	            id="email"
	            label="Email Address"
	            type="email"
	            fullWidth
	            
	          />
	          </Grid>
	 
	          <Grid
              item
              md={12}
              xs={12}
            >
	          <TextField
                fullWidth
                label="Select Location"
                margin="normal"
                name="location"             
                required
                select
                SelectProps={{ native: true }}
                value={location.value}
                variant="outlined"
              >
              <option></option>
                {location.map(option => (

                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
              </Grid>  
	          <Grid
              item
              md={12}
              xs={12}
            >
	          <TextField	      
	            margin="normal"
	            id="phone"
	            label="Phone"
	            type="number"
	            fullWidth
	            
	          />
	          </Grid>
	        </DialogContent>
	        <DialogActions>
	          <Button onClick={this.handleToggle} color="primary">
	            Cancel
	          </Button>
	          <Button onClick={this.handleToggle} color="primary">
	            Subscribe
	          </Button>
	        </DialogActions>
	      </Dialog>
	    </Fragment>
	}
}
