import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import Item from '../components/Item';

class List extends Component {
    state = {
        items: [{id: 1, text: 'Start'}],
        searchTerm: ''
    }

    constructor() {
        super();
    }

    getItems = () => {
        this.setState((state) => {
            return {items: [{id: 1, text: state.searchTerm}]}
        });
    }

    onSearchInputChange = (event) => {
        if (event.target.value) {
            this.setState({searchTerm: event.target.value});
        } else {
            this.setState({searchTerm: 'Tadaaaa...'});
        }
        this.getItems();
    }

    render() {
        return (
            <div>
                { this.state.items ? (
                    <div>
                        <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search Term"
                            margin="normal"
                            onChange={this.onSearchInputChange}
                            />
                        <Grid container style={{padding: 24}}>
                            { this.state.items.map((item, i) => (
                                <Grid item key={i} xs={12} sm={6} lg={4} xl={3}>
                                    <Item item={item}/>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "Nada" }
            </div>
        );
    }
}

export default List;