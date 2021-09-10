import Buyable from './Buyable';

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly year: number,
        readonly imax: boolean,
        readonly country: string,
        readonly tag: string,
        readonly genre: string,
        readonly time: number,
        readonly price: number,
    ) { }
}