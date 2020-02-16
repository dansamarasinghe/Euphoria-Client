import React, { Component } from 'react'
import { Grid } from '@material-ui/core';
import {Container} from 'react-bootstrap';
import DistrictStat from './Stats/DistrictStat';
import GenderStat from './Stats/GenderStat';
import YearStat from './Stats/YearStat';
import EmotionStat from './Stats/EmotionStat';
export default class Statistics extends Component {
      constructor(){
            super();
            this.state = {
                
            }
    }

  render() {

    return (
        <Grid container spacing={3}>
            <Grid container>
                <Container>
                    <DistrictStat></DistrictStat>
                </Container>
            </Grid>
            <Grid container>
                <Container>
                    <GenderStat></GenderStat>
                </Container>
            </Grid>
            <Grid container>
                <Container>
                    <YearStat></YearStat>
                </Container>
            </Grid>
            <Grid container>
                <Container>
                    <EmotionStat></EmotionStat>
                </Container>
            </Grid>

        </Grid>
    )
  }
}
