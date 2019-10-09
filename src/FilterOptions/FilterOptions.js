import React from 'react';
import './FilterOptions.css';

class FilterOptions extends React.Component {
    render() {
        return (
            <div className="filterOptions">
                <form>
                    <label htmlFor="print-type">Print Type: </label>
                    <select
                        id="print-type"
                        name="print-type"
                        onChange={e => this.props.updatePrintType(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="books">Books</option>
                        <option value="magazines">Magazines</option>
                    </select>
                    <label htmlFor="filter-options">Book Type: </label>
                    <select
                        id="filter-options"
                        name="filter-options"
                        onChange={e => this.props.updateFilter(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="ebooks">All eBooks</option>
                        <option value="free-ebooks">Free eBooks</option>
                    </select>    
                </form>
            </div>
        )
    }
}
export default FilterOptions;