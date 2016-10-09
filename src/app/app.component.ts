import { Component } from '@angular/core';
import { EntropyService } from './entropy/entropy.service';

@Component({
  selector:     'app-root',
  templateUrl:  './app.component.html',
  styleUrls:    [
                  './app.component.css'
                ]
})
export class AppComponent {
  private entropy: EntropyService;
  private subject: string   = 'Information theory';
  private title: string     = 'Lab #2';
  private author: string    = 'Inokentii Duka';

  constructor(entropy: EntropyService) {
    this.entropy = entropy;
  }

}
