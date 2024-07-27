import React, { useEffect } from "react";
import { Container, Typography, Grow, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts'

import memories from './images/memories.png';
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { CustomAppBar, CustomHeading, CustomImage } from './styles';

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  
  return (
    <Container maxWidth="lg">
      <CustomAppBar>
        <Typography variant="h2" align="center" component={CustomHeading}>Memories</Typography>
        <img src={memories} alt="memories" height="60" component={CustomImage} />
      </CustomAppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
