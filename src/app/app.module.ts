import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Material
import { MatSliderModule } from '@angular/material/slider';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

//componentes
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatSliderModule ],
  declarations: [ AppComponent, HelloComponent,LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
