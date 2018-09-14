import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createPost } from '../actions';
import { connect } from 'react-redux';

class PostNew extends Component {

    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''} `;
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    type="text"
                    className="form-control"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField} />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField} />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField} />
                <div className="row">
                    <div className="col-md-1">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    <div className="col-md-1">
                        <Link className="btn btn-danger" to="/">Cancel</Link>
                    </div>
                </div>
            </form>
        )
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Enter a title'
    }
    if (!values.categories) {
        errors.categories = 'Enter at least one categorie'
    }
    if (!values.content) {
        errors.content = 'Enter some content'
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostNewForm'
})(
    connect(null, {createPost})(PostNew)
);
