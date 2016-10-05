import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

import { AppComponent }     from './app.component';
import { MatrixComponent }  from './matrix/matrix.component';
import { EntropyService }   from './entropy/entropy.service';

@NgModule({
  declarations: [
    AppComponent,
    MatrixComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ EntropyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
