import React from 'react';
import './ResultList.css';
import Result from '../Result/Result.js';

class ResultList extends React.Component {
    render() {
        const results = this.props.books
            .map((book) => 
                <Result
                 key={book.id} 
                 title={book.volumeInfo.title}
                 authors={book.volumeInfo.authors.toString()}
                 description={book.volumeInfo.description}
                 refLink={book.volumeInfo.infoLink}
                 imgSource={book.volumeInfo.imageLinks.thumbnail}
                //  price={book.saleInfo.listPrice.amount}
                 />)
        return (
            <div className="resultList">
                {results}
            </div>

        )
    }
}

ResultList.defaultProps = {
    books: []
}

export default ResultList;