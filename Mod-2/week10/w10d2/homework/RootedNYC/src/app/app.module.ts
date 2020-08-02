import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    TopNavComponent,
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
