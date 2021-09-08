import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('add cinema', () => {
  const cart = new Cart();
  cart.add(new Movie(1009, 'Avengers', 2012, true, 'USA', 'Avengers Assemble!', 'fantastic', 137, 300));
  expect(cart.items.length).toBe(1);
});
