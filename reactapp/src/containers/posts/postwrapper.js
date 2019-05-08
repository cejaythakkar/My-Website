import React from 'react'
import PostForm from './postform';
import Posts from './posts';
export default function PostsWrapper() {
  return (
    <React.Fragment>
      <PostForm />
      <Posts />
    </React.Fragment>
  )
}
