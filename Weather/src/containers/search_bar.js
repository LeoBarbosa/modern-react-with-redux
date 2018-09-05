import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' }
    }

    onInputChange = (event) => {
        this.setState({ term: event.target.value })
    }

    onSubmitForm = (event) => {
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        const { error } = this.props;

        return (
            <form className={error ? 'has-danger' : 'form-group'} onSubmit={this.onSubmitForm}>
                <div className="input-group">
                    <input
                        placeholder="Give a five-day forecast in your favorite cities in USA"
                        className="form-control"
                        value={this.state.term}
                        onChange={this.onInputChange}
                    />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </span>
                </div>

                {error &&
                    <div class="form-control-feedback">{error.message}</div>
                }

            </form>
        )
    }
}

function mapDispathToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch)
}

function mapStateToProps({ weather }) {
    return { error: weather.error }
}

export default connect(mapStateToProps, mapDispathToProps)(SearchBar);

