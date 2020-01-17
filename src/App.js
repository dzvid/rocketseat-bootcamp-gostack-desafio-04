import React from 'react';

import './App.css';

import Header from './components/Header';
import PostList from './components/PostList';

/*
Components:

App
--Header
--Postlist
----Post
------Header
------Content
------gray line(not a component)
------Comments
--------Comment
*/

function App() {
  return (
    <>
      <Header />
      <PostList />
    </>
  );
}

export default App;
