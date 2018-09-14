import React, { Component } from 'react';
import { fetchPosts } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import _ from 'lodash';
class PostIndex extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPostList = () => {
        return _.map(this.props.posts, (post) => {
            return (
                <Link to={`/post/${post.id}`} key={post.id}>
                    <li id={post.id} className="list-group-item">

                        {post.title}
                    </li>
                </Link >
            )

    })
}

render() {
    return (
        <div>
            <h3>Posts</h3>
            <Link className="btn btn-primary" to="/posts/new">Add a Post</Link>
            <ul className="list-group">
                {this.renderPostList()}
            </ul>
        </div>
    )
}
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex);
