import React, { Component } from 'react'

export default class PostItem extends Component {
  render() {
    return (
      <div className="post-item">
        <h3>{this.props.post.title}</h3>
        <p>{this.props.post.body}</p>
      </div>
    )
  }
}
