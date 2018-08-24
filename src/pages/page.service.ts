import {EventEmitter} from '@angular/core';

export class PageService {
    onClick:EventEmitter<number> = new EventEmitter();
    public num: number;
    public doClick(k){
        this.num = k;
    }
}