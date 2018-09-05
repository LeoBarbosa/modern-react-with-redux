import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        
        if(!this.props.book) {
            return <div>Select a book to get starter.</div>
        }

        return (
            <div>
                <h3>Title: {this.props.book.title}</h3>
                <h4>Number of Pages: {this.props.book.pages}</h4>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);
