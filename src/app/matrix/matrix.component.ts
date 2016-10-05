import { Component } from '@angular/core';

import { EntropyService } from '../entropy/entropy.service';

@Component({
  selector:     'matrix',
  templateUrl:  './matrix.component.html'
})
export class MatrixComponent {

  private range: number = 3;
  private entropy: EntropyService;

  constructor (EntropyService: EntropyService) {
    this.entropy = EntropyService;
    this.update();
  }

  private update() {
    this.entropy.generate(this.range);
  }
}
