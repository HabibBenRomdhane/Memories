// we're gonna to dispatch the action inside the useEffect 
// it's initially be the component that mount but later on will be the componentWillUpdate
import React, { useEffect } from 'react'; 
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import useStyles from './styles.js';
import { useDispatch } from 'react-redux'; // allows us to dispatch an action
import { getPosts } from './actions/posts.js';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch(); // define the dispatch

    useEffect(() => {
        dispatch(getPosts()); // dispatch actions specify the function then call it
    }, [dispatch]); // include dispatch in the dependency array

    return (
        // lg : large
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                {/* Typography stands for any textuel element exp h2, pragraphs ... */}
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="icon" height="60" />
            </AppBar>
            {/* Grow components provides some simple animation and it's going to have a property in*/}
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        {/* xs=12 which means it's gonna take the full width on extra small devices 
                        and sm: small and mediu devices 7 outta 12 spaces */}
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
    )
}

export default App;