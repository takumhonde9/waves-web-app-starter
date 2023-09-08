import { useState } from 'react';
import { useSwitch } from '../../hooks';
import { calculateDiscountedPrice, mergeStyles } from '../../utilities';
import { ProductCardProps } from './types';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

/**
 * NOTE:
 *
 * We have created this component for you to use.
 * Do not change this code in any way. You may use it as
 * a reference to structure your code.
 *
 * This is the product card component.
 */

function ProductCard({ data }: ProductCardProps) {
  const [imagesVisible, showImages, hideImages] = useSwitch();
  const [imageSrc, setImageSrc] = useState(data.thumbnail);

  const resetImageSrc = () => setImageSrc(data.thumbnail);

  return (
    <div
      onMouseEnter={showImages}
      onMouseLeave={hideImages}
      className={styles['product-card']}
    >
      <Link to={`/products/${data.id}`} className='link-overlay' />
      <img
        className={styles['product-card-img']}
        src={imageSrc}
        alt={`${data.title} thumbnail`}
      />

      <div className='v-stack gap-2 capitalize'>
        {!imagesVisible ? (
          <div className='v-stack'>
            <h2 className={styles['product-card-title']}>{data.title}</h2>
            <sub className={styles['product-card-sub']}>{data.brand}</sub>
            <sub className={styles['product-card-sub']}>
              {data.category}
            </sub>
          </div>
        ) : (
          <div className='h-stack gap-1 z-10'>
            {data.images.map((src: string, idx: number) => (
              <img
                onMouseEnter={() => setImageSrc(src)}
                onMouseLeave={resetImageSrc}
                className={styles['product-card-thumbnail']}
                key={src}
                src={src}
                alt={`${data.title} ${idx}`}
              />
            ))}
          </div>
        )}

        <div
          className={mergeStyles([
            styles['product-card-price'],
            'h-stack',
            'gap-2',
          ])}
        >
          <span>
            $
            {calculateDiscountedPrice(data.price, data.discountPercentage)}
          </span>
          <s className='text-stroke'>${data.price}</s>
        </div>
        <span className={styles['product-card-discount']}>
          {data.discountPercentage}% off
        </span>
      </div>
    </div>
  );
}
ProductCard.displayName = 'Product Card';

export default ProductCard;
