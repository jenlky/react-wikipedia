import React, { Component } from "react";

export default class SearchBar extends Component {
  // class fields - Not a part of ECMAScript specification yet. But if you're using a Babel transpiler, this syntax should work.
  state = { term: "" };

  handleChange = (event) => {
    this.setState({ term: event.target.value });
    console.log(event.target.value);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.articleSearch(this.state.term);
  }

  render() {
    return (
      <form className="form--align form--font" onSubmit={this.handleSubmit} >
        <h2>Search Wikipedia:</h2>
        <input type="text" placeholder="Type here..." className="search__bar"
          value={this.state.term} onChange={this.handleChange} />
        <button type="submit" className="search__btn">Submit</button>
      </form>
    );
  }
}
