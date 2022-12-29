import * as React from 'react';

import { List, Edit, Datagrid, TextField, TextInput, ReferenceInput, SimpleForm, EditButton, Create } from 'react-admin';

const usersFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
    <TextInput label="Title" source="title" defaultValue="Hello, World!" />,
];



export const User = () => {
    return (
        <>
            <List filter={usersFilters}>
                <Datagrid rowClick="edit">
                    {/* <ReferenceField source="id" reference="users" /> */}
                    <TextField source="id" />
                    <TextField source="userName" />
                    <TextField source="userEmail" />
                    <TextField source="userPassword" />
                    <EditButton />
                </Datagrid>
            </List>

        </>
    )
};

export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="id" reference="users" />
            <TextInput source="id" />
            <TextInput source="userName" />
            <TextInput source="userEmail" />
            <TextInput source="userPassword" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = () => (
    < Create >
        <SimpleForm>
            <TextInput source="userName" />
            <TextInput source="userEmail" />
            <TextInput source="userPassword" />
        </SimpleForm>
    </Create >
)

