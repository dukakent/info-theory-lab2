import { Component } from '@angular/core';
import { EntropyService } from '../entropy/entropy.service';

@Component({
  selector:     'result',
  templateUrl:  './result.component.html'
})
export class ResultComponent {

  private entropy: EntropyService;

  constructor (EntropyService: EntropyService) {
    this.entropy = EntropyService;
  }
}
