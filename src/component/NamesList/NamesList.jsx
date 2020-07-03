import React, { Component } from 'react';

export default class NamesList extends Component {
    getNames = () => {
        console.log(this.props.names);
        console.log(this.props.searchTerm);

        return this.props.names
            .filter((name) => name.includes(this.props.searchTerm))
            .map((name, index) => <li key={index}>{name}</li>);
    }

    render() { 
        return (
            <ul>
                {/* {this.state.names.map((name, index) => <li key={index}>{name}</li>)} */}
                {this.getNames()}
            </ul>
        );
    }
}