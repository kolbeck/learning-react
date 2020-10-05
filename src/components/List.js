import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import Item from '../components/Item';

class List extends Component {
    state = {
        isLoaded: false,
        items: [],
        searchTerm: ''
    }

    getItems = () => {
        fetch("https://api.punkapi.com/v2/beers?beer_name=ipa&page=1&per_page=3")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
        // this.setState((state) => {
        //     return { items: [{ id: 1, text: state.searchTerm }] }
        // });
    }

    onSearchInputChange = (event) => {
        if (event.target.value) {
            this.setState({ searchTerm: event.target.value });
        } else {
            this.setState({ searchTerm: 'Tadaaaa...' });
        }
        this.getItems();
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