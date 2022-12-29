import React from "react";
import { List, Datagrid, TextField } from 'react-admin';
export const PostCreate = () => (

    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="userName" />
            <TextField source="userEmail" />
            <TextField source="userPassword" />
        </Datagrid>
    </List>

);