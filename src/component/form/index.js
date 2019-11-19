import React, { Component } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import getFirebaseClient from "../../libs/fireBase/getClient";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
        };
        this.registerUser = this.registerUser.bind(this);
        this.changeInput = this.changeInput.bind(this);
    };


    registerUser(e) {
        const { initFirebase } = getFirebaseClient();
        const database = initFirebase.database()
        database.ref('/register').push(this.state)
            .then(() => {
                alert('Register Success!');
            })
            .catch((error) => {
                alert('Error Register fail!');
                console.log(error);
            });
    }

    changeInput(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <Grid item spacing={4} style={{ width: 600, marginLeft: 80 }} container direction="column" justify="center" alignItems="center">
                <Grid item>
                    <h1>Register User</h1>
                </Grid>
                <Grid item container direction="row" justify="center" alignItems="center">
                    <TextField
                        name="name"
                        label="User Name"
                        margin="normal"
                        fullWidth
                        value={this.state.name}
                        onChange={this.changeInput}
                    />
                    <TextField
                        name="email"
                        label="Email"
                        margin="normal"
                        fullWidth
                        value={this.state.email}
                        onChange={this.changeInput}
                    />
                    <Button onClick={this.registerUser} style={{ marginTop: 20 }} variant="contained" size="large" color="primary" fullWidth >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        );
    }
}