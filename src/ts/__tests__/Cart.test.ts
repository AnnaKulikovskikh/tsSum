import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';

test('new cart should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('add', () => {
  const cart = new Cart();
  cart.add(new Movie(1009, 'Avengers', 2012, true, 'USA', 'Avengers Assemble!', 'fantastic', 137, 300));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  expect(cart.items.length).toBe(3);
});

test('sum', () => {
  const cart = new Cart();
  cart.add(new Movie(1009, 'Avengers', 2012, true, 'USA', 'Avengers Assemble!', 'fantastic', 137, 300));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  expect(cart.sum()).toBe(3200);
});

test('discont', () => {
  const cart = new Cart();
  cart.add(new Movie(1009, 'Avengers', 2012, true, 'USA', 'Avengers Assemble!', 'fantastic', 137, 300));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  expect(cart.sumDiscont(10)).toBe(2880);
});

test('delete', () => {
  const cart = new Cart();
  cart.add(new Movie(1009, 'Avengers', 2012, true, 'USA', 'Avengers Assemble!', 'fantastic', 137, 300));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.delete(1008);
  expect(cart.items.length).toBe(2);
});
