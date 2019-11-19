import React, { Component } from 'react';
import { Grid, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import getDatabase from "../../libs/fireBase/getDatabase";


export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            register: [],
        };
    };

    componentDidMount() {
        getDatabase(`register`, (snapshot) => {
            const register = [];
            snapshot.forEach((childSnapshot) => {
                let item = childSnapshot.val();
                item.key = childSnapshot.key;
                register.push(item);
            });
            this.setState({register});
        });
    }

    render() {
        return (
            <Grid item style={{width: 600, marginLeft: 80}} container direction="column" justify="center"
                  alignItems="center">
                <Grid item>
                    <h1>List User</h1>

                </Grid>
                <Grid item container direction="row" justify="center" alignItems="center">
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell align="right">UserName</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.register.map(row => (
                                    <TableRow key={row.key}>
                                        <TableCell component="th" scope="row">
                                            {row.key}
                                        </TableCell>
                                        <TableCell align="right">{row.name}</TableCell>
                                        <TableCell align="right">{row.email}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}