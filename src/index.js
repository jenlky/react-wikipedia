import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ArticleList from "./components/article_list";
import SearchBar from "./components/search_bar";
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataArray: []
    }
  }

  articleSearch = (term) => {
    fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${term}&namespace=0&format=json&origin=*`)
      .then(res => res.json())
      .then(res => {
        console.log(res);

        const [titles, contents, links] = res;
        const zippedInfo = titles.map((title, index) => ({
          title: titles[index],
          content: contents[index],
          link: links[index]
        }));
        console.log(zippedInfo);

        this.setState({ dataArray: zippedInfo });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <SearchBar articleSearch={this.articleSearch} />
        <ArticleList dataArray={this.state.dataArray} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
