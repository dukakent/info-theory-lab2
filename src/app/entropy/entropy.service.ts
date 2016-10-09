import { Injectable } from '@angular/core';

@Injectable()
export class EntropyService {

  private matrixJoint: number[][];
  private Px: number[];
  private Py: number[];
  private HJoint: number;


  constructor() { }

  private eachItem(action: (item: number) => number): void {
    for(let row of this.matrixJoint) {
      for(let i in row) {
        row[i] = action(row[i]);
      }
    }
  }

  public init(range: number): void {
    this.Px = Array(range);
    this.Py = Array(range);
    this.matrixJoint = (Array(range)).fill([]);

    for (let i in this.matrixJoint) {
      this.matrixJoint[i] = Array(range);
      this.matrixJoint[i].fill(0);
    }
  }

  public generate(isSame: boolean = false): void {
    let sum = 0;
    this.HJoint = 0;

    this.eachItem(() => {
      let newItem = isSame ? 1 : Math.random();
      sum += newItem;
      return newItem;
    });

    this.eachItem((oldItem) => {
      let newItem = oldItem / sum;
      this.HJoint -= newItem * Math.log2(newItem);
      return newItem;
    });
  }

  public computePx(): void {
    this.Px.fill(0);

    for (let i in this.matrixJoint) {
      for (let j in this.matrixJoint[i]) {
        this.Px[j] += this.matrixJoint[i][j];
      }
    }
  }

  public computePy(): void {
    for (let i in this.matrixJoint) {
      let sum = 0;

      for (let item of this.matrixJoint[i]) {
        sum += item;
      }

      this.Py[i] = sum;
    }
  }
}
