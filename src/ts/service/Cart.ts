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
        const arr = [...this._items.price];
        let result = arr.reduce((sum, current) => sum: + current, 0);
        return result;
    }

    sumDiscont(percent: number): number{
        return this.sum() - this.sum() * persent / 100;
    }

    deleteItem{

    }
}