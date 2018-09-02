import React, { Component } from 'react';
import './styles/element.css';

class PeriodicElement extends Component {
    render() {
        let element = this.props.element;
        let type = getElementType(element.numero_atomico)
        let style = "periodic-element " + type

        return (
            <td className={style} onclick={this.showModal}>
                <h1>{element.id}</h1>
            </td>
        )
    }
}

function getElementType(n) {
    let type = "";

    // Cases
    if (n == 1 || (n >= 6 && n <= 8 ) || n == 15 || n == 16 || n == 34) {
        type = "noMetal";
    }
    if (n == 3 || n == 11 || n == 19 || n == 37 || n == 55 || n == 87) {
        type = "metalAlcalino"
    }
    if (n == 4 || n == 12 || n == 20 || n == 38 || n == 56 || n == 88) {
        type = "metalAlcalinoTerreo"
    }
    if (isBetween(n, 21, 30) || isBetween(n, 39, 48) ||
        (isBetween(n, 71, 80)) || (isBetween(n, 103, 112))) {
        type = "metalTransicion"
    }
    if (n == 13 || n == 31 || n == 49 || n == 50 || isBetween(n, 81, 83)) {
        type = "otroMetal"
    }
    if (n == 2 || n == 10 || n == 18 || n == 36 || n == 54 || n == 86) {
        type = "gasNoble"
    }
    if (n == 9 || n == 17 || n == 35 || n == 53 || n == 85) {
        type = "halogeno"
    }
    if (n == 5 || n == 14 || n == 32 || n == 33 || n == 51 ||
        n == 52 || n == 84) {
        type = "halogeno"
    }
    if (isBetween(n, 70, 57)) {
        type = "lantanido";
    }
    if (isBetween(n, 89, 102)) {
        type = "actinido";
    }
    if (isBetween(n, 113, 118)) {
        type = "elementoDesconocido";
    }

    return type;
}

function isBetween(n, a, b) {
   return (n - a) * (n - b) <= 0
}

export default PeriodicElement;
