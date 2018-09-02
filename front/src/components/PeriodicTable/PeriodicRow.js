import React, { Component } from 'react';
import PeriodicElement from './PeriodicElement';
import './styles/row.css';

class PeriodicRow extends Component {
    render() {
        let columns  = [];
        let elements = this.props.elements;

        elements.forEach((e, x) => {
            columns.push(<PeriodicElement key={x} element={e}/>);
        });

        return (
            <tr className="periodic-row">
                {columns}
            </tr>
        )
    }
}

export default PeriodicRow;
