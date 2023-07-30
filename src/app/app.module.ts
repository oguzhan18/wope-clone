import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharred/navbar/navbar.component';
import { NotifierComponent } from './sharred/notifier/notifier.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './sharred/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotifierComponent,
    LayoutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
