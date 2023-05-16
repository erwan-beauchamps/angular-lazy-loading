import { SecondFeatureComponent } from './second-feature.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SecondFeatureComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: SecondFeatureComponent
      }
    ])
  ]
})
export class SecondFeatureModule { }
