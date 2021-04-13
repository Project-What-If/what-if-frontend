import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        boxShadow: '0 5px 8px 0 rgba(0, 0, 0, 0.3)',
        backgroundColor: '#fafafa',
    },
    media: {
        height: 300,
    },
});

function RoomsList({ rooms }) {
    const classes = useStyles();

    console.log(rooms);
    return (
        <div>
            <Container>
                <Grid container spacing={3}>
                    {rooms.map(room => (
                        <Grid item xs={12} sm={4} key={room.id}>
                            <Link to={`/room/${room.id}`}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.media}
                                        image={room.imageURL}
                                    />
                                    <CardContent>
                                        <Typography
                                            color="primary"
                                            variant="h5"
                                        >
                                            {room.title}
                                        </Typography>
                                        <Typography
                                            color="textSecondary"
                                            variant="subtitle2"
                                        >
                                            {room.tag}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default RoomsList;
