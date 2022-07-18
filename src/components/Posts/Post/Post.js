import React, { useState } from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import useStyles from './styles';

import { useDispatch } from 'react-redux';

import posts from "../../../redux/actions/posts";


const Post= ( { post, setCurrentId } ) => {

    const classes = useStyles();
    const dispatch = useDispatch();


    return(
       <Card className={classes.card}>
          <CardMedia className={classes.media} image={post.imageURL} />

          <Typography className={classes.imageName} variant="h5" component="h2" >{post.imageName}</Typography>
          <CardContent>
           <Typography variant="body2" color="textSecondary" component="p">{post.imageDetails}</Typography>
          </CardContent>
          
          <CardActions className={classes.cardActions}>
            <Button size="small" color="primary" onClick={() => setCurrentId(post._id)}><EditIcon fontSize="medium" /> Edit</Button>
            <Button size="small" color="primary" onClick={() => dispatch(posts.deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
            
          </CardActions>
       </Card>
    )
}

export default Post;