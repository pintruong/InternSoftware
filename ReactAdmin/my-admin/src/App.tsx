import React from 'react';
import './App.css';

import { Admin, Resource } from 'react-admin';
import { dataProvider } from './Provider'
import { UserCreate } from './users'
import { ProductList } from './products';
import { PostCreate } from './post';




const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name='users' list={UserCreate} />
      <Resource name='products' list={ProductList} />
      <Resource name='post' list={PostCreate} />
    </Admin>
  );
}

export default App;
