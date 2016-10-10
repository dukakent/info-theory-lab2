import { Component, Input } from '@angular/core';
import { EntropyService } from '../entropy/entropy.service';

@Component({
  selector:     'matrix',
  templateUrl:  './matrix.component.html',
  styleUrls:    [
                  './matrix.component.css'
                ]
})
export class MatrixComponent {

  @Input('entropy') type: string;
  
  private entropy: EntropyService;

  constructor (EntropyService: EntropyService) {
    this.entropy = EntropyService;
  }
}
