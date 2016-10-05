import { Injectable } from '@angular/core';

@Injectable()
export class EntropyService {

  public joint: number[][];

  constructor() { }

  private init(range: number) {
    this.joint = [];
    for (var i = 0; i < range; i++) {
      this.joint[i] = [];
      for (var j = 0; j < range; j++) {
        this.joint[i][j] = 0;
      }
    }
  }

  private eachItem(action: (item: number) => number) {
    for(let row of this.joint) {
      for(let i in row) {
        row[i] = action(row[i]);
      }
    }
  }


  public generate(range: number): void {
    let sum = 0;

    this.init(range);
    this.eachItem((oldItem) => {
      let newItem = Math.random();
      sum += newItem;
      return newItem;
    });
    this.eachItem((item) => item / sum);
  }
}
