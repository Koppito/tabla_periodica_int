import React, { Component } from 'react';

import PeriodicElement from './PeriodicElement';

class PeriodicRow extends Component {
    render() {
        let num_columns = this.props.numColumns;
        let columns = [];

        for (let x = 0; x < num_columns; x++) {
            columns.push(<PeriodicElement key={x} />);
        }

        return (
            <div>
                {columns}
            </div>
        )
    }
}

export default PeriodicRow;
