import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainComponent } from './main/main.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SecondMainComponent } from './main/second-main/second-main.component';
import { MysteryComponent } from './main/mystery/mystery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainComponent,
    TopBarComponent,
    SecondMainComponent,
    MysteryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
