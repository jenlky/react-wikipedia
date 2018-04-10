import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Article from "./components/article";
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      term: "",
      titles: [],
      contents: [],
      links: []
    }
  }

  handleChange = (event) => {
    this.setState({ term: event.target.value });
    console.log(event.target.value);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${this.state.term}&namespace=0&format=json&origin=*`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ titles: res[1] });
        this.setState({ contents: res[2] });
        this.setState({ links: res[3] });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <form className="form--align form--font" onSubmit={this.handleSubmit}>
          <h2>Search Wikipedia:</h2>
          <input type="text" placeholder="Type here..." className="search__bar"
            value={this.state.term} onChange={this.handleChange} />
          <button type="submit" className="search__btn">Submit</button>
        </form>
        <Article titles={this.state.titles} contents={this.state.contents}
          links={this.state.links} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
