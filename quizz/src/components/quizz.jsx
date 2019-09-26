import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import { Paper, Typography, Button } from '@material-ui/core';

class QuizzWindow extends Component {
    state = {
        info:{
            question:"1 - WHICH MOTOROLA PRODUCTS DO YOU HAVE OR ARE YOU INTERESTED IN?",
            selectedOptions:{
                1:  {
                    clicked: false,
                    color: '#ff8888'
                },
                2:  {
                    clicked: false,
                    color: '#ff8888'
                },
                3:  {
                    clicked: false,
                    color: '#ff8888'
                },
                4:  {
                    clicked: false,
                    color: '#ff8888'
                },
                5:  {
                    clicked: false,
                    color: '#ff8888'
                },
                6:  {
                    clicked: false,
                    color: '#ff8888'
                },
            }
        }
    };

    render() { 
        return (
            <Grid container justify='center'>
                <Grid container justify='center' alignItems='center' style={{width: '60%', paddingTop:'10vh'}}>
                    <Paper >
                        <Grid container justify='center' style={{width:'100%'}}>
                            <Typography variant='display1' align='center'>
                                {this.state.info.question}
                            </Typography>
                            <Typography style={{paddingTop: 10}} variant='headline' align='center'>
                                Select all that apply                           
                            </Typography>
                        </Grid>
                        <Grid container alignItems='center' justify='space-between' style={{padding: 10, paddingTop: 50}}>

                            <Grid container justify='center' style={{width:'30%', padding:5}}>
                                <div style={{backgroundColor:'#ff8888', width:200, height:200}}></div>
                            </Grid>     


                        </Grid>
                        <Grid container justify='flex-end' style={{padding: 10, paddingTop: 50}}>
                            <Button style={{backgroundColor:'#55ff55'}}>Next</Button>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
};

export default QuizzWindow;