import React from 'react';
import './SearchForm.css';

class SearchForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ""
        }
    };
    updateSearchTerm(term) {
        this.setState({
            searchTerm: term
        });
    }
    
    handleSumbit(e) {
        e.preventDefault();
        const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&key=AIzaSyAOSYHjmUIFQdIa3QQfQW6H5tblouQiErQ`
        const options = {
            method: 'GET',
            'Content-Type': "application/json"  
        }
        fetch(url, options)
        .then(res => {
            if (!res.ok) {
                throw new Error('Something went wrong!')
            }
            return res.json();
        })
        .then (data => {
            this.setState({
                searchTerm: ""
            });
            this.props.updateBooks(data);
        })
        .catch(err => {
            this.setState({
                error: err.message
            });
        });
    }
    render() {
        return (
            <div className="searchForm">
                <form onSubmit={e => this.handleSumbit(e)}>
                    <label htmlFor='search'>Search: </label>
                    <input type="text" name="search" id="search" placeholder="Search books..." value={this.state.searchTerm} onChange={e => this.updateSearchTerm(e.target.value)}/>
                    <button type="submit">Search</button> 
                </form>
            </div>
        )
    }
}
export default SearchForm;