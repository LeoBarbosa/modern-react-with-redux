import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router-dom';

class PostShow extends Component {
    
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    onDelete = () => {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { post } = this.props;
        if(!post) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <Link to="/posts/" class="btn">Back to Index </Link>
                <div className="row">
                    <div className="col-md-8">
                        <h3>{post.title}</h3>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-danger pull-right" onClick={this.onDelete}>Delete</button>
                    </div>
                </div>
                <h6>{post.categories}</h6>
                <p>{post.content}</p>
            </div>
        )
    }

}

function mapStateToProps({ posts }, ownProps) {
    return {
        post: posts[ownProps.match.params.id]
    };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);
