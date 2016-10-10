import { Injectable } from '@angular/core';

@Injectable()
export class EntropyService {

  public joint: number[][];
  public XrelateY: number[][];
  public YrelateX: number[][];
  private Px: number[];
  private Py: number[];
  private HJoint: number;


  constructor() { }

  private eachItem(action: (item: number) => number): void {
    for(let row of this.joint) {
      for(let i in row) {
        row[i] = action(row[i]);
      }
    }
  }

  public init(range: number): void {
    this.Px = Array(range);
    this.Py = Array(range);
    this.joint = (Array(range)).fill([]);

    for (let i in this.joint) {
      this.joint[i] = Array(range);
      this.joint[i].fill(0);
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

    for (let i in this.joint) {
      for (let j in this.joint[i]) {
        this.Px[j] += this.joint[i][j];
      }
    }
  }

  public computePy(): void {
    for (let i in this.joint) {
      let sum = 0;

      for (let item of this.joint[i]) {
        sum += item;
      }

      this.Py[i] = sum;
    }
  }
}
