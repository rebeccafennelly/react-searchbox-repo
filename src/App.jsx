import React, { Component } from 'react';
import './App.css';

import SearchBox from "./component/SearchBox";
import NamesList from "./component/NamesList";

export default class App extends Component {
  state = {
    searchTerm: "",
    names : [
      "Delilah",
      "Fortitude",
      "Nesbitt",
      "Bogart",
      "Cherub",
      "Fortescue",
      "Archibald",
      "Tarquin",
      "Barnaby"
    ]
  }

  handleChange = (event) => this.setState({searchTerm: event.target.value})

  render() {
    return (
      <>
        <SearchBox handleChange={this.handleChange}/>
        <NamesList names={this.state.names} searchTerm={this.state.searchTerm}/>
      </>
    );
  }
}