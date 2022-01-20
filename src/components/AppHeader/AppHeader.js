import React from 'react'
import "./AppHeader.css"

function AppHeader({ liked, allPosts}) {
  return (
    <div className='app-header d-flex'>
      <h1>Suxrob Avezov</h1>
      <h2>{allPosts} posts, likes { liked}</h2>
    </div>
  )
}

export default AppHeader
