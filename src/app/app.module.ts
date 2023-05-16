import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstFeatureComponent } from './first-feature/first-feature.component';
import { SecondFeatureComponent } from './second-feature/second-feature.component';
import { ThirdFeatureComponent } from './third-feature/third-feature.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstFeatureComponent,
    SecondFeatureComponent,
    ThirdFeatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
