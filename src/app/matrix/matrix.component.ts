import { Component } from '@angular/core';
import { EntropyService } from '../entropy/entropy.service';

@Component({
  selector:     'matrix',
  templateUrl:  './matrix.component.html',
  styleUrls:    [
                  './matrix.component.css'
                ]
})
export class MatrixComponent {

  private entropy: EntropyService;

  constructor (EntropyService: EntropyService) {
    this.entropy = EntropyService;
  }
}
