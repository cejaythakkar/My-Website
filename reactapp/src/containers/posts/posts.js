import React, { Component } from 'react'
import PostItem from './postitem';
import axios from 'axios';

export default class Posts extends Component {
    state = {
        posts:[]
    }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(response => {
        this.setState({
            posts: response.data
        })
    });
  }

  render() {
    const posts = this.state.posts.map(post => {
        return <PostItem key={post.id} post={post} />
    });
    return (
      <div>
        <h1>Posts</h1>
        <div className="postlist-wrapper">
            {posts}
        </div>
      </div>
    )
  }
}
