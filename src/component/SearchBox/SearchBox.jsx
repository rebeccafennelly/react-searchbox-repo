import React, {Component} from 'react';

export default class SearchBox extends Component {
    render() {
        return (
            <input type="text" onChange={this.props.handleChange} />
        );
    }
}