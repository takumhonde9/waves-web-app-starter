import { IProduct, IPost, IUser } from './types';

export const testPost: IPost = {
  id: 1,
  title: 'His mother had always taught him',
  body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
  userId: 9,
  tags: ['history', 'american', 'crime'],
  reactions: 2,
};

// An example of a test user
export const testUser: IUser = {
  id: 1,
  firstName: 'Terry',
  lastName: 'Medhurst',
  maidenName: 'Smitham',
  phone: '+63 791 675 8914',
  username: 'atuny0',
  image: 'https://robohash.org/hicveldicta.png',
  domain: 'slashdot.org',
};

export const testProduct: IProduct = {
  id: 1,
  title: 'iPhone 9',
  description: 'An apple mobile which is nothing like apple',
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: 'Apple',
  category: 'smartphones',
  thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  images: [
    'https://i.dummyjson.com/data/products/1/1.jpg',
    'https://i.dummyjson.com/data/products/1/2.jpg',
    'https://i.dummyjson.com/data/products/1/3.jpg',
    'https://i.dummyjson.com/data/products/1/4.jpg',
    'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  ],
};
