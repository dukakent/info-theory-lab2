import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

import { AppComponent }     from './app.component';
import { EntropyService }   from './entropy/entropy.service';
import { MatrixComponent }  from './matrix/matrix.component';
import { ConfigComponent }  from './config/config.component';
import { ResultComponent }  from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    MatrixComponent,
    ConfigComponent,
    ResultComponent
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
