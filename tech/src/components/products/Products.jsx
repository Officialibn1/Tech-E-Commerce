import { Grid } from '@material-ui/core';
import Product from './Product/Product';

const products = [
    {id: 1, name: 'Shoes', desc: 'Running Shoes.', price: '40.50'},
    {id: 2, name: 'Macbook', desc: 'APple Macbook M2.', price: '3999.89'},
    {id: 3, name: 'T-Shirt', desc: 'Luis Vuiton.', price: '25.99'}
];


const Products = () => {
    return (
        <main>
            <Grid container justify='center' spacing={4}>
                {products.map((product) => (
                    <Grid xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Products;
