import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

import Item from '../components/Item';

class List extends Component {
    state = {
        items: [],
        searchTerm: ''
    }

    componentDidMount() {
        this.getItems('');
    }

    // TODO how to ensure results are coming back in the right order?
    getItems = (searchTerm) => {
        var p = { page: 1, per_page: 3 };
        if (searchTerm)
            p['beer_name'] = searchTerm;

        return axios.get(`https://api.punkapi.com/v2/beers`, {
            params: p
        }).then(res => {
            const items = res.data;
            console.log(items);
            this.setState({
                items: items,
                searchTerm: searchTerm
            });
        });
    }

    onSearchInputChange = (event) => {
        if (event.target.value) {
            this.getItems(event.target.value);
        } else {
            this.getItems('');
        }
    }

    render() {
        return (
            <div>
                { this.state.items ? (
                    <div>
                        <TextField style={{ padding: 24 }}
                            id="searchInput"
                            placeholder="Search Term"
                            margin="normal"
                            onChange={this.onSearchInputChange}
                        />
                        <Grid container style={{ padding: 24 }}>
                            {this.state.items.map((item) => (
                                <Grid item key={item.id} xs={12} sm={6} lg={4} xl={3}>
                                    <Item item={item} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "Nada"}
            </div>
        );
    }
}

export default List;