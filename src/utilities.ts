import React, { ReactElement, ReactNode } from 'react';

/**
 * Generate a number between 1 and num
 *
 * @param num any number described as the max
 */
export function generateIntMaxedAt(num: number) {
  return Math.floor(Math.random() * num) + 1;
}

/**
 * A generic void function.
 *
 * @Returns nothing.
 */
export const voidFunction: VoidFunction = () => {};

/**
 * Calculate the price of a product after the discount is applied.
 * @param price the full price of the product
 * @param discountPercentage the discount percentage value (i.e. 45.5 for 45.5%)
 */
export function calculateDiscountedPrice(
  price: number,
  discountPercentage: number,
) {
  return ((1 - discountPercentage / 100) * price).toFixed(2);
}

/**
 * Creates a string of styles from an array styles.
 *
 * @param styles the class names
 */
export function mergeStyles(styles: string[]) {
  return styles.join(' ').trim();
}

/**
 * This method returns an array of children that have
 * the given displayName.
 *
 * @param children a component's children
 * @param displayName a component's display name
 */
export function getSubcomponent<T>(children: ReactNode, displayName: T) {
  return React.Children.map(children, (child: any) => {
    if (!child) return null;
    if (child.type === undefined) return null;
    if (!child.type && !child.type.displayName) return null;
    return child.type.displayName === displayName
      ? (child as ReactElement)
      : null;
  });
}
