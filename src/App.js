import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Search from './Search.js';
import Giflist from './Giflist.js';

var App = React.createClass({

  getInitialState : function(){
    return {
      gifs : [ ],
    }
  },

  componentDidMount : function(){
    axios.get('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
      .then(response => {
        this.setState({
        gifs: response.data.data
      });
     })
      .catch(error => {
        console.log(error);
      });
  },

  performSearch : function(query){
     axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
      .then(response => {
        this.setState({
        gifs: response.data.data
      });
     })
      .catch(error => {
        console.log(error);
      });
  },

  render : function(){
    return (
      <div>
        <div className = "main-header">
          <div className = "inner">
            <h1 className = "main-title">Gif Search</h1>
            <Search onSearch = {this.performSearch}/>
          </div>
          </div>
          <div className = "main-content">
            <Giflist data = {this.state.gifs}/>
          </div>
        </div>
    )
  }
});

export default App;
