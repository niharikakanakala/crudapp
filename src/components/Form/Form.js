import React, { useState, useEffect } from "react";

import { TextField, Button, Typography, Paper } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";

import useStyles from './styles';

import posts from "../../redux/actions/posts";


export const Form = ({ setCurrentId, currentId }) => {

    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));

    const [postData, setPostData] = useState({
        imageName:"",
        imageURL:"",
        imageDetails:""
    });

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (post) setPostData(post);
      }, [post]);

      
    const handleSubmit = async(e) => {
       e.preventDefault();
       
       if(!currentId) {
        dispatch(posts.createPosts(postData));
          
          } else {
            dispatch(posts.updatePost(currentId, postData));
          } 
          clear()
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({ imageName:"",  imageURL:"",  imageDetails:"" });
    }

    return(
       <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'EDIT' : 'CREATE'} CRUD POST</Typography>
                    <TextField 
                        name="imageName" 
                        variant="outlined" 
                        label="imageName" 
                        fullWidth 
                        value={postData.imageName}
                        onChange={(e) => setPostData({ ...postData, imageName: e.target.value })}
                    />
                    <TextField 
                        name="imageURL" 
                        variant="outlined" 
                        label="imageURL" 
                        fullWidth 
                        value={postData.imageURL}
                        onChange={(e) => setPostData({ ...postData, imageURL: e.target.value })}
                    />
                    <TextField 
                        name="imageDetails" 
                        variant="outlined" 
                        label="imageDetails" 
                        fullWidth 
                        value={postData.imageDetails}
                        onChange={(e) => setPostData({ ...postData, imageDetails: e.target.value })}
                    />
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
       </Paper>
    )
}