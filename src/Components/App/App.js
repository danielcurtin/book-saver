import React, { Component } from 'react'
import { auth } from '../../firebase';
import { Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import './App.css';

import Header from '../Header/Header'
import Popular from '../Popular/Popular'
import Filter from '../Filter/Filter'
import AllBooks from '../AllBooks/AllBooks'
import getAllBooks from '../../APICalls'
import Login from '../Login/Login';
import Register from '../Register/Register';
import SingleBook from '../SingleBook/SingleBook';

class App extends Component {
  constructor() {
    super();
    this.state = {
      lists: [],
      currentBooks: [],
      topBooks: [],
      loading: true,
      user: {}
    }
  }
 
  componentDidMount() {
    getAllBooks()
      .then(data => {
        this.setState({ lists: data.results.lists, loading: false, currentBooks: data.results.lists[0].books})
        this.getTopBooks()
      })
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.setState({ user: user })
        } 
      })
      
  }

  getTopBooks() {
    if (this.state.loading) {
      setTimeout(() => this.getTopBooks(), 300);
      return;
    };

    const top = [];

    for (let i = 0; top.length < 4; i++) {
      if (!top.find(book => book.title === this.state.lists[i].books[0].title)) {
        top.push(this.state.lists[i].books[0])
      }
    }

    this.setState({ topBooks: top })
  }

  selectFilter = name => {
     const filterBooks = this.state.lists.find(list => list.list_name === name)
     this.setState({currentBooks: filterBooks.books})
  }

  loginUser = userData => {
    this.setState({ user: userData })
  }

  logOutUser = () => {
    this.setState({ user: {} })
  }

  render(){
    if (this.state.loading) {
      return
    }
    return (
      <div className="App">
        <Header logOutUser={this.logOutUser} user={this.state.user}/>
        <Route exact path='/' render={() => {
          return (
            <main>
              <Popular topBooks={this.state.topBooks}/>
              <Filter lists={this.state.lists} selectFilter={this.selectFilter}/>
              <AllBooks books={this.state.currentBooks}/>
            </main>
          );
        }} />
        <Route exact path='/login' render={() => {
          return (
            <Login loginUser={this.loginUser}/>
          );
        }} />
        <Route exact path='/register' render={() => {
          return (
            <Register />
          )
        }}/>
        <Route exact path='/book/:id' render={({ match }) => {
          const listWithBook = this.state.lists.find(list => list.books.find(book => book.primary_isbn13 === match.params.id))
          const book = listWithBook.books.find(book => book.primary_isbn13 === match.params.id)
          return <SingleBook book={book} />
        }}/>
      </div>
    )
  }
}



export default App;
