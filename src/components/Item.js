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
                        // image={'https://picsum.photos/300/300'}
                        image={props.item.image_url}
                        // title={'Random Image'}
                        title={props.item.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                            {props.item.name}
                        </Typography>
                        <Typography component="p">
                            {props.item.description}
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