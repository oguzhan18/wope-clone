import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharred/navbar/navbar.component';
import { NotifierComponent } from './sharred/notifier/notifier.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotifierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
