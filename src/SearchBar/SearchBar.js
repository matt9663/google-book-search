import React from 'react';
import './SearchBar.css';
import SearchForm from '../SearchForm/SearchForm.js';
import FilterOptions from '../FilterOptions/FilterOptions.js';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            printType: "All",
            filter: null
        }
    };
    updatePrintType(param) {
        this.setState({
            printType: param
        });
    }
    updateFilter(param) {
        this.setState({
            filter: param
        });
    }
    render() {
        return (
            <div className="searchBar">
                <SearchForm 
                  printType={this.state.printType} 
                  filter={this.state.filter} 
                  updateBooks={this.props.updateBooks}
                />
                <FilterOptions 
                  updatePrintType={e => this.updatePrintType(e.target.value)} 
                  updateFilter={e => this.updateFilter(e.target.value)}
                />
            </div>
        )
    }
}
export default SearchBar;
