import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const FirstComponents = (props) => {
   const { product } = props;
    console.log(product[0].product_details)

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Product ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Available Colors</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {product.map((obj) => (
                        <TableRow key={obj.product_id}>
                            <TableCell>{obj.product_id}</TableCell>
                            <TableCell>{obj.name}</TableCell>
                            <TableCell>
                                {obj.color.join(', ')}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default FirstComponents;
