import { Injectable } from '@angular/core';

@Injectable()
export class EntropyService {

  public joint: number[][];

  constructor() { }

  public generate(range: number) {
    let matrix: number[][] = [];
    let sum = 0;

    for(let i = 0; i < range; i++) {
      matrix[i] = [];

      for(let j = 0; j < range; j++) {
        matrix[i][j] = Math.random();
        sum += matrix[i][j];
      }
    }

    for(let i = 0; i < range; i++) {
      for(let j = 0; j < range; j++) {
        matrix[i][j] /= sum;
      }
    }

    this.joint = matrix;
  }
}
