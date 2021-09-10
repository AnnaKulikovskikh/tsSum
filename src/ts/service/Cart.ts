import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items]; 
  }

  sum(): number {
    let result: number = 0;
    for (let i of this._items) {
      result += i.price;
    }
      return result;
  }

  sumDiscont(discont: number): number{
    return this.sum() - this.sum() * discont / 100;
  }

  deleteItem(index: number): void{
    for (let i: number = 0; i < this._items.length; i ++) {
      if (this._items[i].id == index) {
        this._items.splice(i, 1);
      }
    }
    }
}
