import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../actions/postActions';

class Posts extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         posts: []
    //     }
    // }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => res.json())
    //         .then(data => this.setState({ posts: data }));
    // }
    

    componentDidMount() {
        this.props.fetchPosts();
    }

    componentDidUpdate(nextProps) {
        if ( nextProps.newPost ) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {

        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));

        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
};

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
