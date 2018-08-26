import React, { Component } from 'react';

import PeriodicRow from './PeriodicRow';

class PeriodicTable extends Component {
    componentWillMount() {
        fetch("http://localhost")
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
        });
    }

    render() {
        let n_columns = 18;
        let n_rows    = 7;

        let rows = [];
        for (let x = 0; x < n_rows; x++) {
            rows.push(<PeriodicRow numColumns={n_columns} key={x} />)
        }

        return (
            <div>
                {rows}
            </div>
        )
    }
}

export default PeriodicTable;
