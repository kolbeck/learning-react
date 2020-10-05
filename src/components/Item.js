import React from 'react';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Item = (props) => {
    return (
        <div>
            {props.item ? (
                <Card>
                    <CardMedia style={{ height: 300 }}
                        image={'https://picsum.photos/300/300'}
                        title={'Random Image'}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                            Item Here
                        </Typography>
                        <Typography component="p">
                            {props.item.text}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" href="#">
                            Do Something
                        </Button>
                    </CardActions>
                </Card>
            ) : null}
        </div>
    );
}

export default Item;