import { FirstFeatureRoutingModule } from './first-feature-routing.module';
import { NgModule } from '@angular/core';
import { FirstFeatureComponent } from './first-feature.component';

@NgModule({
  declarations: [
    FirstFeatureComponent
  ],
  imports: [FirstFeatureRoutingModule]
})
export class FirstFeatureModule { }
