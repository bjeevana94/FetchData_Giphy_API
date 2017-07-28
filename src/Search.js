import React, { Component } from 'react';

var Search = React.createClass({
	
	getInitialState : function(){
		return {
			searchText : " "
		}
	},

	ontextchange : function(e){
		this.setState({searchText: e.target.value});
	},

	onsubmit : function(e){
		e.preventDefault();
		this.props.onSearch(this.state.searchText);
		e.currentTarget.reset();
	},

	render : function(){
		return (
			<form className = "search-form" onSubmit = {this.onsubmit}>
				<label className = "is-hidden" htmlFor = "search">search</label>
				<input type = "search" onChange ={this.ontextchange} name= "search" placeholder = "search.."/>
				<button type = "submit" id = "submit" className= "search-button">Search</button>
			</form>
		);
	}
});

export default Search;