import React from 'react'
import "./SearchPanel.css"

function SearchPanel() {
  return (
    <input type="text"
      placeholder='Search by posts'    
      className='form-control search-input'
    />
  )
}

export default SearchPanel
