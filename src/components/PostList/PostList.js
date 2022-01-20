import React from 'react'
import PostListItem from '../PostListItem/PostListItem'
import "./PostList.css"

function PostList({ posts, onDelete, onToggleImportant, onToggleLiked}) {

  const elements = posts.map(item => {
    return (
      <li key={item.id} className='list-group-item'>
        <PostListItem
          label={item.label}
          important={item.important}
          onDelete={() => onDelete(item.id)}
          onToggleImportant={() => onToggleImportant(item.id)}
          onToggleLiked={() => onToggleLiked(item.id)}
          like={item.like}
          important = {item.important}
        />
      </li>
    )
  })

  return (
    <ul className='app-list list-group'>
      {elements}
    </ul>
  )
}

export default PostList
