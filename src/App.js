import React from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar.js';
import ResultList from './ResultList/ResultList.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    } 
  }
  updateBooks(data) {
    this.setState({
      books: data
    });
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Google Book Search</h1>
        </header>
        <SearchBar 
          updateBooks={books => this.updateBooks(books)}
          />
        <ResultList 
          books={this.state.books.items}
          />
    </div>
    );
  }
} 

export default App;
