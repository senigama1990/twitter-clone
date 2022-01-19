import React from 'react'
import AppHeader from '../AppHeader/AppHeader';
import PostAddForm from '../PostAddForm/PostAddForm';
import PostList from '../PostList/PostList';
import PostStatusFilter from '../PostStatusFilter/PostStatusFilter';
import SearchPanel from '../SearchPanel/SearchPanel';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { label: "Learning React", important: true, id: "qw" },
        { label: "Learning Angular", important: false, id: "qe" },
        { label: "Learning Vue", important: false, id: "qr" },
      ]
    }
    this.deleteItem = this.deleteItem.bind(this)
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id)

      const before = data.slice(0, index)
      const after = data.slice(index + 1)

      const newArr = [...before, ...after]

      return {
        data: newArr
      }
    })
  }

  render() {
    return (
      <div className='app'>
        <AppHeader />
        <div className='search-panel d-flex'>
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList posts={this.state.data} onDelete={this.deleteItem} />
        <PostAddForm />
      </div>
    )
  }
}



