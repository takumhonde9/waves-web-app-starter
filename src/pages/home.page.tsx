import { Grid, ProductCard } from '../components';
import { useQuery } from '@apollo/client';
import { GET_PRODUCT } from '../lib';
import { Fragment } from 'react';
import { IProduct, PaginationParams } from '../types';

interface GetProductQueryModel {
  total: number;
  limit: number;
  skip: number;
  items: IProduct[];
}

/**
 * A page component that renders components for the home page.
 */
function HomePage() {
  const { loading, data, error } = useQuery<
    { products: GetProductQueryModel },
    PaginationParams
  >(GET_PRODUCT, {
    variables: { skip: 0, limit: 12 },
  });

  if (error) {
    return <div className='error'>{error.message}</div>;
  }

  if (loading) {
    // you can create your own loader component
    return <span>loading...</span>;
  }

  console.log(data);

  return (
    <Fragment>
      {data && data.products.total > 0 ? (
        <Grid cols={3}>
          {data.products.items.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </Grid>
      ) : (
        <span>No products</span>
      )}
    </Fragment>
  );
}
HomePage.displayName = 'Home Page';

export default HomePage;
