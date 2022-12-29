import { Datagrid, List, TextField } from "react-admin";

export const ProductList = () => {
    return (
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="productCode" />
                <TextField source="productName" />
                <TextField source="productPrice" />
            </Datagrid>

        </List>
    )
}