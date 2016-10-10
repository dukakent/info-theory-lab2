import { Component } from '@angular/core';
import { EntropyService } from '../entropy/entropy.service';

@Component({
  selector:     'config',
  templateUrl:  './config.component.html',
  styleUrls:    [
                  './config.component.css'
                ]
})
export class ConfigComponent {

  private entropy: EntropyService;
  private range: number;

  constructor (EntropyService: EntropyService) {
    this.entropy = EntropyService;
    this.range = 3;
    this.update();
  }

  private update(isSame: boolean = false): void {
    this.entropy.init(this.range);
    this.entropy.generate(isSame);
    this.entropy.computePx();
    this.entropy.computePy();
    this.entropy.computeXrelateY();
    this.entropy.computeYrelateX();
  }
}
