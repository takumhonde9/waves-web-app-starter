import { IProduct, PaginationParams } from '../../../types';
import { useSuspenseQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../../../lib';
import { Fragment } from 'react';
import { Grid, ProductCard } from '../../../components';
import { GetProductQueryModel } from '../types.ts';

function Content() {
  const { data } = useSuspenseQuery<
    { products: GetProductQueryModel },
    PaginationParams
  >(GET_PRODUCTS, {
    variables: { skip: 0, limit: 10 },
  });

  return (
    <Fragment>
      {data && data.products.total > 0 ? (
        <Grid cols={3}>
          {data.products.items.map((item: IProduct) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </Grid>
      ) : (
        <span>No products</span>
      )}
    </Fragment>
  );
}
Content.displayName = 'Home Content';

export default Content;
