import React, {useEffect, useState} from "react";

import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import { useDispatch } from 'react-redux';

import posts from "./redux/actions/posts";

import Posts from "./components/Posts/Posts";

import { Form } from "./components/Form/Form";

import useStyles from './styles';

import './App.css';


const App = () => {

  const [currentId, setCurrentId] = useState(null);

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(posts.getPosts());
  }, [currentId, dispatch]);

  return(
    <Container maxwidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h2" align="center">CRUD APP</Typography>
            <img className={classes.image} src="https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/master/client/src/images/memories.png?token=AF56X74XONEUGZ4FD2FUIA27UURPI" alt="crud" height="60" align="center" />
            
        </AppBar>

      <Grow in>
        <Container>
            <Grid container className={classes.container} justifyContent="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={8}>
                  <Posts setCurrentId={setCurrentId}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
            </Grid>
        </Container>
      </Grow>
    </Container>
  )
}
export default App;

