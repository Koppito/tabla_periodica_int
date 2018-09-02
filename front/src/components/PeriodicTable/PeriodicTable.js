import React, { Component } from 'react';
import PeriodicRow from './PeriodicRow';
import './styles/table.css';

class PeriodicTable extends Component {
    constructor() {
        super();

        this.state = {
            elements: []
        }
    }

    componentWillMount() {
        fetch("http://localhost:8080/elements")
            .then((data) => data.json())
            .then((data) => this.setState({elements: data}))
    }

    render() {
        let n_columns = 18;
        let n_rows    = 7;
        let elements  = this.state.elements;
        if (!elements || elements.length === 0) {
            // TODO: Add loading spinner or something
            return (<div>Loading...</div>);
        }


        let rows = [];
        let elementStack = [...elements.elements];

        // Order element stack by numero_atomico
        elementStack.sort((a, b) => a.numero_atomico - b.numero_atomico);

        for (let x = 0; x < n_rows; x++) {
            let rowElements;
            switch (x+1) {
                case 1:
                    rowElements = elementStack.splice(0, 2);
                    break;
                case 2:
                    rowElements = elementStack.splice(0, 8);
                    break;
                case 3:
                    rowElements = elementStack.splice(0, 8);
                    break;
                default:
                    rowElements = elementStack.splice(0, n_columns);
                    break;
            }
            rows.push(<PeriodicRow numColumns={n_columns} key={x}
                elements={rowElements}/>)
        }

        return (
            <table className="periodic-table">
                {rows}
            </table>
        )
    }
}

export default PeriodicTable;
