import React from 'react';
import './Result.css';

class Result extends React.Component {
    render() {
        return (
            <div className="result">
                <h2>{this.props.title}</h2>
                <div className="bookData">
                    <img src={this.props.imgSource} alt={this.props.title} />
                    <div className="bookInfo">
                        <h3>Author: {this.props.authors}</h3>
                        {/* <h3>Price: {this.props.price}</h3> */}
                        <p>{this.props.description}</p>
                        <a
                            href={this.props.refLink}
                            target="_blank"
                            rel="noopener noreferrer">
                                More Info
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Result