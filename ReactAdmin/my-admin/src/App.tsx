import React from 'react';
import './App.css';


import { Admin, Resource } from 'react-admin';
import { dataProvider } from './Provider'
import { UserEdit, UserCreate, User } from './users'
import { ProductList } from './products';
import { PostCreate } from './post';
import { Dashboard } from './dashboard';

import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";



const App = () => {
  return (
    <Admin  dataProvider={dataProvider} dashboard={Dashboard}>
      <Resource name='users' list={User} edit={UserEdit} create={UserCreate} icon={UserIcon} />
      <Resource name='products' list={ProductList} />
      <Resource name='post' list={PostCreate} icon={PostIcon} />
    </Admin>
  );
}

export default App;
