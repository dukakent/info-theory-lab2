import { Component } from '@angular/core';

import { EntropyService } from '../entropy/entropy.service';

@Component({
  selector:     'matrix',
  templateUrl:  './matrix.component.html'
})
export class MatrixComponent {

  private entropy: EntropyService;

  private range: number;
  private joint: number[][];

  constructor (EntropyService: EntropyService) {
    this.entropy = EntropyService;
    this.range = 3;
    this.update();
  }

  private update(): void {
    this.entropy.generate(this.range);
  }
}
